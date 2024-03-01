import type { ComputedRef } from "vue";
import { computed } from "vue";
import type { AuthorInfo } from "vuepress-shared/client";
import { useThemeLocaleData } from "vuepress-theme-hope/client";

export const useAuthorInfo = (): ComputedRef<AuthorInfo> => {
  const themeLocale = useThemeLocaleData();

  return computed(() => <AuthorInfo>themeLocale.value.author);
};
