import { memo } from "react";
import dynamic from "next/dynamic";

export const RichTextEditor = memo(
  dynamic(() => import("@mantine/rte"), {
    ssr: false,
    loading: () => null,
  }),
);
