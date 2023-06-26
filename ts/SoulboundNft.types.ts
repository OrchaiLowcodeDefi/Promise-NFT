/**
* This file was automatically generated by @cosmwasm/ts-codegen@0.30.1.
* DO NOT MODIFY IT BY HAND. Instead, modify the source JSONSchema file,
* and run the @cosmwasm/ts-codegen generate command to regenerate this file.
*/

export type ExecuteMsg = {
  mint: {};
} | {
  update_config: {
    campaign_end?: number | null;
    owner?: Addr | null;
    pauser?: Addr | null;
  };
} | {
  register_external_contract: {
    sc_atom_promise_staking?: Addr | null;
  };
};
export type Addr = string;
export interface InstantiateMsg {
  campaign_end: number;
  extension?: Metadata | null;
  nft_admin: Addr;
  nft_name: string;
  nft_symbol: string;
  owner: Addr;
  pauser: Addr;
  soulbound_nft_code_id: number;
  token_uri?: string | null;
}
export interface Metadata {
  animation_url?: string | null;
  attributes?: Trait[] | null;
  background_color?: string | null;
  description?: string | null;
  external_url?: string | null;
  image?: string | null;
  image_data?: string | null;
  name?: string | null;
  youtube_url?: string | null;
}
export interface Trait {
  display_type?: string | null;
  trait_type: string;
  value: string;
}
export interface MigrateMsg {}
export type QueryMsg = {
  dynamic_attributes_nft_info: {
    token_id: string;
  };
} | {
  nft_info: {};
} | {
  config: {};
} | {
  external_contract: {};
};