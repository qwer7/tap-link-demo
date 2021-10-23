import {
  ref, reactive, computed, watch, ComputedRef, Ref,
} from '@vue/composition-api';
import { IPageBlock, IUrl } from '@/services/types';

type prefixUrlFn = (u: string) => string;
type returned = {
  link: IUrl, url: Ref<string>, urlText:ComputedRef<string>, href:ComputedRef<string>
}

export function useNamedLink(block: IPageBlock, prefixUrl: prefixUrlFn): returned {
  const d = block.data as IUrl;
  const link = reactive(d);
  const url = ref(link.url);
  const urlText = computed(() => link.name || link.url);
  const href = computed(() => (link.url.indexOf('://') === -1 ? link.prefix + link.url : link.url));
  watch(url, (newValue: string) => {
    link.url = prefixUrl(newValue);
  });

  return {
    link,
    url,
    urlText,
    href,
  };
}
