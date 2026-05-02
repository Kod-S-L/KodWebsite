/**
 * Names of the icons available in `src/components/Icon.astro`.
 *
 * Kept in a separate `.ts` file (instead of being exported from the
 * Astro component) so the type can be reliably imported by any other
 * component without going through Astro frontmatter compilation.
 */
export type IconName =
  | 'mail'
  | 'github'
  | 'arrow-right'
  | 'arrow-left'
  | 'external'
  | 'bolt'
  | 'shield'
  | 'spark'
  | 'code'
  | 'layout'
  | 'wrench'
  | 'cog'
  | 'check';
