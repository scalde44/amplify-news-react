/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import React from "react";
import { SocialPost } from "../models";
import {
  getOverrideProps,
  useDataStoreBinding,
} from "@aws-amplify/ui-react/internal";
import SocialB from "./SocialB";
import { Collection } from "@aws-amplify/ui-react";
export default function SocialBCollection(props) {
  const { post, items: itemsProp, overrides: overridesProp, ...rest } = props;
  const overrides = { ...overridesProp };
  const items =
    itemsProp !== undefined
      ? itemsProp
      : useDataStoreBinding({
          type: "collection",
          model: SocialPost,
        }).items;
  return (
    <Collection
      type="list"
      justifyContent="stretch"
      direction="column"
      items={items || []}
      {...rest}
      {...getOverrideProps(overrides, "Collection")}
    >
      {(item, index) => (
        <SocialB
          post={item}
          key={item.id}
          {...getOverrideProps(overrides, "Collection.SocialB[0]")}
        ></SocialB>
      )}
    </Collection>
  );
}
