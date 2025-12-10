/**
 * Determines which responsive classes to hide an asset grid item
 */
export function getAssetItemHiddenClass(index: number, assetsLength: number): string {
    if (index === 0 || index === assetsLength - 1) return '';
    if (index === 1) return 'max-md:hidden';
    if (index === 3) return 'max-lg:hidden';
    return 'max-xl:hidden';
}
