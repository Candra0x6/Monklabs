/**
 * Gold Noise Animation Component
 * 
 * Creates a WebGL-based animated noise effect using Three.js and React Three Fiber.
 * This component generates a procedurally animated noise pattern with:
 * - Simplex 3D noise for organic, smooth animation
 * - Dithering/grid pattern overlay for retro visual effect
 * - Mouse position and hover state tracking
 * - Real-time animation synchronized with frame updates
 * 
 * The shader creates an interactive, flowing noise pattern that responds to
 * mouse movement and hover states, making it suitable for backgrounds or
 * decorative animated elements.
 */

import React, { useRef, useMemo } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import * as THREE from 'three';
import gsap from 'gsap';

/** 
 * TypeScript declaration for React Three Fiber custom JSX elements
 * Extends React JSX to recognize Three.js mesh elements
 */
declare module 'react' {
  // eslint-disable-next-line @typescript-eslint/no-namespace
  namespace JSX {
    interface IntrinsicElements {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      mesh: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      planeGeometry: any;
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      shaderMaterial: any;
    }
  }
}

/**
 * Vertex Shader: Simple full-screen quad
 * Passes UV coordinates to fragment shader for texture mapping
 */
const vertexShader = `
  varying vec2 vUv;
  void main() {
    vUv = uv;
    gl_Position = vec4(position, 1.0);
  }
`;

/**
 * Fragment Shader: Simplex Noise + FBM + Dither/Grid Effect
 * Implements Simplex 3D noise algorithm for procedural animation
 * with dithering pattern overlay for retro aesthetic
 */
const fragmentShader = `
  precision mediump float;
  uniform float uTime;
  uniform vec2 uResolution;
  uniform vec2 uMouse;
  uniform float uHoverState;
  varying vec2 vUv;

  // --- Simplex 3D Noise ---
  // Implementation based on: https://github.com/stegu/webgl-noise/blob/master/src/noise3D.glsl
  // This creates smooth, continuous noise values for organic animations
  vec3 mod289(vec3 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 mod289(vec4 x) { return x - floor(x * (1.0 / 289.0)) * 289.0; }
  vec4 permute(vec4 x) { return mod289(((x*34.0)+1.0)*x); }
  vec4 taylorInvSqrt(vec4 r) { return 1.79284291400159 - 0.85373472095314 * r; }

  float snoise(vec3 v) {
    const vec2  C = vec2(1.0/6.0, 1.0/3.0) ;
    const vec4  D = vec4(0.0, 0.5, 1.0, 2.0);

    // First corner
    vec3 i  = floor(v + dot(v, C.yyy) );
    vec3 x0 = v - i + dot(i, C.xxx) ;

    // Other corners
    vec3 g = step(x0.yzx, x0.xyz);
    vec3 l = 1.0 - g;
    vec3 i1 = min( g.xyz, l.zxy );
    vec3 i2 = max( g.xyz, l.zxy );

    //   x0 = x0 - 0.0 + 0.0 * C.xxx;
    //   x1 = x0 - i1  + 1.0 * C.xxx;
    //   x2 = x0 - i2  + 2.0 * C.xxx;
    //   x3 = x0 - 1.0 + 3.0 * C.xxx;
    vec3 x1 = x0 - i1 + C.xxx;
    vec3 x2 = x0 - i2 + C.yyy;
    vec3 x3 = x0 - 0.5;

    // Permutations
    i = mod289(i); 
    vec4 p = permute( permute( permute( 
              i.z + vec4(0.0, i1.z, i2.z, 1.0 ))
            + i.y + vec4(0.0, i1.y, i2.y, 1.0 )) 
            + i.x + vec4(0.0, i1.x, i2.x, 1.0 ));

    // Gradients: 7x7 points over a square, mapped onto an octahedron.
    // The ring size 17*17 = 289 is close to a multiple of 49 (49*6 = 294)
    float n_ = 0.142857142857; // 1.0/7.0
    vec3  ns = n_ * D.wyz - D.xzx;

    vec4 j = p - 49.0 * floor(p * ns.z * ns.z);  //  mod(p,7*7)

    vec4 x_ = floor(j * ns.z);
    vec4 y_ = floor(j - 7.0 * x_ );    // mod(j,N)

    vec4 x = x_ *ns.x + ns.yyyy;
    vec4 y = y_ *ns.x + ns.yyyy;
    vec4 h = 1.0 - abs(x) - abs(y);

    vec4 b0 = vec4( x.xy, y.xy );
    vec4 b1 = vec4( x.zw, y.zw );

    //vec4 s0 = vec4(lessThan(b0,0.0))*2.0 - 1.0;
    //vec4 s1 = vec4(lessThan(b1,0.0))*2.0 - 1.0;
    vec4 s0 = floor(b0)*2.0 + 1.0;
    vec4 s1 = floor(b1)*2.0 + 1.0;
    vec4 sh = -step(h, vec4(0.0));

    vec4 a0 = b0.xzyw + s0.xzyw*sh.xxyy ;
    vec4 a1 = b1.xzyw + s1.xzyw*sh.zzww ;

    vec3 p0 = vec3(a0.xy,h.x);
    vec3 p1 = vec3(a0.zw,h.y);
    vec3 p2 = vec3(a1.xy,h.z);
    vec3 p3 = vec3(a1.zw,h.w);

    //Normalise gradients
    vec4 norm = taylorInvSqrt(vec4(dot(p0,p0), dot(p1,p1), dot(p2, p2), dot(p3,p3)));
    p0 *= norm.x;
    p1 *= norm.y;
    p2 *= norm.z;
    p3 *= norm.w;

    // Mix final noise value
    vec4 m = max(0.6 - vec4(dot(x0,x0), dot(x1,x1), dot(x2,x2), dot(x3,x3)), 0.0);
    m = m * m;
    return 42.0 * dot( m*m, vec4( dot(p0,x0), dot(p1,x1), 
                                  dot(p2,x2), dot(p3,x3) ) );
  }

  void main() {
    // Correct aspect ratio
    vec2 aspectUV = vUv;
    aspectUV.x *= uResolution.x / uResolution.y;

    // Scale controls the zoom level of the noise
    float scale = 0.8; 
    
    // Optimization: Simplified background noise calculation
    float val = snoise(vec3(aspectUV * scale, uTime * 0.1)) * 0.5 + 0.5;

    // --- Dot Matrix / Dither Pattern ---
    // Create a grid coordinate system
    // Higher density to match the fine grain of the image
    float dotsCount = uResolution.y / 5.0; // One dot every 5 pixels
    vec2 gridUV = aspectUV * dotsCount;
    vec2 cellID = floor(gridUV);
    vec2 uvInCell = fract(gridUV);
    
    // Center is 0.5, 0.5
    vec2 center = vec2(0.5);
    float dist = distance(uvInCell, center);
    
    // Sample noise at cell center
    vec3 cellNoisePos = vec3((cellID / dotsCount) * scale, uTime * 0.1);
    
    float nCell = snoise(cellNoisePos);
    float cellVal = smoothstep(0.2, 0.6, nCell * 0.5 + 0.5);

    // Determine dot size based on noise value
    float dotRadius = 0.45; 
    
    // Colors - Tuned to match the reference image (Deep Amber/Gold)
    vec3 cBlack = vec3(0.0, 0.0, 0.0); // Pure black background
    
    vec3 cDarkBrown = vec3(0.282, 0.235, 0.196); 

    vec3 cGold = vec3(0.498, 0.314, 0.0); // #7f5000
    vec3 cBright = vec3(0.341,0.212,0.); 

    // Color ramp
    vec3 cellColor = mix(cBlack, cDarkBrown, smoothstep(0.05, 0.35, cellVal));
    cellColor = mix(cellColor, cGold, smoothstep(0.35, 0.65, cellVal));
    cellColor = mix(cellColor, cBright, smoothstep(0.65, 1.0, cellVal));

    // Circle Shape mask
    float mask = 1.0 - smoothstep(dotRadius - 0.1, dotRadius, dist);
    
    // Fade out dots in dark areas
    mask *= smoothstep(0.05, 0.35, cellVal);

    // Apply color
    vec3 finalColor = mix(cBlack, cellColor, mask);

    // --- Mouse Interaction (Black Hole) ---
    vec2 mouseUV = uMouse;
    mouseUV.x *= uResolution.x / uResolution.y;
    
    float mouseDist = distance(aspectUV, mouseUV);
    
    // Radius controlled by hover state
    float holeRadius = 0.25 * uHoverState;
    
    // Use the existing noise 'val' to perturb the edge of the hole
    // This makes the hole look like it's eating away the noise organically
    float holeEdge = smoothstep(holeRadius - 0.05, holeRadius + 0.1, mouseDist + (val * 0.1));
    
    // Apply the hole (multiply by holeEdge: 0 inside, 1 outside)
    finalColor *= holeEdge;

    gl_FragColor = vec4(finalColor, 1.0);
  }
`;

/**
 * GoldNoiseVisualInner: Inner component for WebGL noise rendering
 * 
 * This component must be placed inside a Canvas element and uses React Three Fiber hooks.
 * It manages the shader material, uniforms, and mouse interaction for the noise animation.
 * 
 * Features:
 * - Real-time frame updates with GSAP for smooth animations
 * - Mouse position tracking converted from screen space to UV coordinates
 * - Hover state animation that controls the "black hole" effect
 * - Dynamic resolution updates for responsive rendering
 */
const GoldNoiseVisualInner: React.FC = () => {
  /** Reference to the Three.js mesh for raycasting and transform control */
  const meshRef = useRef<THREE.Mesh>(null);
  /** Reference to the shader material to update uniforms each frame */
  const materialRef = useRef<THREE.ShaderMaterial>(null);
  /** Three.js canvas size information */
  const { size } = useThree();
  /** Hover state animation reference (0 = not hovering, 1 = hovering) */
  const hoverState = useRef({ value: 0 });

  /**
   * Shader uniforms object with initial values
   * These values are updated each frame to control animation behavior
   */
  const uniforms = useMemo(
    () => ({
      /** Elapsed time in seconds for animation timing */
      uTime: { value: 0 },
      /** Canvas resolution for aspect ratio correction */
      uResolution: { value: new THREE.Vector2(size.width, size.height) },
      /** Mouse position in normalized UV coordinates (0-1) */
      uMouse: { value: new THREE.Vector2(0.5, 0.5) },
      /** Hover state for controlling black hole effect (0-1) */
      uHoverState: { value: 0 },
    }),
    [size.width, size.height]
  );

  /**
   * Frame update hook: Called on every animation frame
   * Updates shader uniforms with current time, resolution, and mouse position
   */
  useFrame(({ clock, pointer }) => {
    if (materialRef.current) {
      // Update elapsed time for animation
      materialRef.current.uniforms.uTime.value = clock.getElapsedTime();
      // Update canvas resolution for responsive rendering
      materialRef.current.uniforms.uResolution.value.set(size.width, size.height);

      // Convert pointer coordinates from -1 to 1 range to 0 to 1 UV range
      const targetX = (pointer.x + 1) * 0.5;
      const targetY = (pointer.y + 1) * 0.5;
      materialRef.current.uniforms.uMouse.value.set(targetX, targetY);

      // Apply current hover state
      materialRef.current.uniforms.uHoverState.value = hoverState.current.value;
    }
  });

  /**
   * Pointer enter handler: Animates hover state to 1 with smooth easing
   * Triggers the "black hole" effect to appear
   */
  const handlePointerEnter = () => {
    gsap.to(hoverState.current, {
      value: 1,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  /**
   * Pointer leave handler: Animates hover state back to 0 with smooth easing
   * Causes the "black hole" effect to fade away
   */
  const handlePointerLeave = () => {
    gsap.to(hoverState.current, {
      value: 0,
      duration: 0.4,
      ease: "power2.out"
    });
  };

  return (
    <mesh
      ref={meshRef}
      scale={[100, 100, 1]} // Scale up to ensure raycasting covers the entire viewport
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    >
      {/* Plane geometry (-1 to 1) covers full screen in clip space */}
      <planeGeometry args={[2, 2]} />
      {/* Shader material with custom vertex and fragment shaders */}
      <shaderMaterial
        ref={materialRef}
        vertexShader={vertexShader}
        fragmentShader={fragmentShader}
        uniforms={uniforms}
      />
    </mesh>
  );
};

/**
 * GoldNoiseVisual: Main exported component for gold noise animation
 * 
 * Wraps the inner component in a Three.js Canvas element with
 * optimized settings for performance and visual quality.
 * 
 * Configuration:
 * - dpr={1}: Fixed device pixel ratio for consistent performance
 * - antialias={false}: Disabled for crisp, pixelated visual style
 * - Camera positioned to view full screen quad
 */
export const GoldNoiseVisual: React.FC = () => {
  return (
    <Canvas
      className='w-full h-full'
      dpr={1} // Fixed device pixel ratio for consistent performance
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: false }} // Disable antialias for crisp pixel look
    >
      {/* Inner component with actual noise rendering logic */}
      <GoldNoiseVisualInner />
    </Canvas>
  )
};