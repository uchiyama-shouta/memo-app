export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  timestamptz: string;
  uuid: string;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']>;
  _gt?: InputMaybe<Scalars['String']>;
  _gte?: InputMaybe<Scalars['String']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']>;
  _in?: InputMaybe<Array<Scalars['String']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']>;
  _lt?: InputMaybe<Scalars['String']>;
  _lte?: InputMaybe<Scalars['String']>;
  _neq?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']>;
  _nin?: InputMaybe<Array<Scalars['String']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']>;
};

/** columns and relationships of "memos" */
export type Memos = {
  __typename?: 'memos';
  content: Scalars['String'];
  created_at: Scalars['timestamptz'];
  id: Scalars['uuid'];
  title: Scalars['String'];
  updated_at: Scalars['timestamptz'];
  userId: Scalars['String'];
};

/** aggregated selection of "memos" */
export type Memos_Aggregate = {
  __typename?: 'memos_aggregate';
  aggregate?: Maybe<Memos_Aggregate_Fields>;
  nodes: Array<Memos>;
};

/** aggregate fields of "memos" */
export type Memos_Aggregate_Fields = {
  __typename?: 'memos_aggregate_fields';
  count: Scalars['Int'];
  max?: Maybe<Memos_Max_Fields>;
  min?: Maybe<Memos_Min_Fields>;
};


/** aggregate fields of "memos" */
export type Memos_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Memos_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']>;
};

/** Boolean expression to filter rows from the table "memos". All fields are combined with a logical 'AND'. */
export type Memos_Bool_Exp = {
  _and?: InputMaybe<Array<Memos_Bool_Exp>>;
  _not?: InputMaybe<Memos_Bool_Exp>;
  _or?: InputMaybe<Array<Memos_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  created_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  id?: InputMaybe<Uuid_Comparison_Exp>;
  title?: InputMaybe<String_Comparison_Exp>;
  updated_at?: InputMaybe<Timestamptz_Comparison_Exp>;
  userId?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "memos" */
export enum Memos_Constraint {
  /** unique or primary key constraint */
  MemosPkey = 'memos_pkey'
}

/** input type for inserting data into table "memos" */
export type Memos_Insert_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** aggregate max on columns */
export type Memos_Max_Fields = {
  __typename?: 'memos_max_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** aggregate min on columns */
export type Memos_Min_Fields = {
  __typename?: 'memos_min_fields';
  content?: Maybe<Scalars['String']>;
  created_at?: Maybe<Scalars['timestamptz']>;
  id?: Maybe<Scalars['uuid']>;
  title?: Maybe<Scalars['String']>;
  updated_at?: Maybe<Scalars['timestamptz']>;
  userId?: Maybe<Scalars['String']>;
};

/** response of any mutation on the table "memos" */
export type Memos_Mutation_Response = {
  __typename?: 'memos_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int'];
  /** data from the rows affected by the mutation */
  returning: Array<Memos>;
};

/** on_conflict condition type for table "memos" */
export type Memos_On_Conflict = {
  constraint: Memos_Constraint;
  update_columns?: Array<Memos_Update_Column>;
  where?: InputMaybe<Memos_Bool_Exp>;
};

/** Ordering options when selecting data from "memos". */
export type Memos_Order_By = {
  content?: InputMaybe<Order_By>;
  created_at?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  title?: InputMaybe<Order_By>;
  updated_at?: InputMaybe<Order_By>;
  userId?: InputMaybe<Order_By>;
};

/** primary key columns input for table: memos */
export type Memos_Pk_Columns_Input = {
  id: Scalars['uuid'];
};

/** select columns of table "memos" */
export enum Memos_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** input type for updating data in table "memos" */
export type Memos_Set_Input = {
  content?: InputMaybe<Scalars['String']>;
  created_at?: InputMaybe<Scalars['timestamptz']>;
  id?: InputMaybe<Scalars['uuid']>;
  title?: InputMaybe<Scalars['String']>;
  updated_at?: InputMaybe<Scalars['timestamptz']>;
  userId?: InputMaybe<Scalars['String']>;
};

/** update columns of table "memos" */
export enum Memos_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  CreatedAt = 'created_at',
  /** column name */
  Id = 'id',
  /** column name */
  Title = 'title',
  /** column name */
  UpdatedAt = 'updated_at',
  /** column name */
  UserId = 'userId'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "memos" */
  delete_memos?: Maybe<Memos_Mutation_Response>;
  /** delete single row from the table: "memos" */
  delete_memos_by_pk?: Maybe<Memos>;
  /** insert data into the table: "memos" */
  insert_memos?: Maybe<Memos_Mutation_Response>;
  /** insert a single row into the table: "memos" */
  insert_memos_one?: Maybe<Memos>;
  /** update data of the table: "memos" */
  update_memos?: Maybe<Memos_Mutation_Response>;
  /** update single row of the table: "memos" */
  update_memos_by_pk?: Maybe<Memos>;
};


/** mutation root */
export type Mutation_RootDelete_MemosArgs = {
  where: Memos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Memos_By_PkArgs = {
  id: Scalars['uuid'];
};


/** mutation root */
export type Mutation_RootInsert_MemosArgs = {
  objects: Array<Memos_Insert_Input>;
  on_conflict?: InputMaybe<Memos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Memos_OneArgs = {
  object: Memos_Insert_Input;
  on_conflict?: InputMaybe<Memos_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MemosArgs = {
  _set?: InputMaybe<Memos_Set_Input>;
  where: Memos_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Memos_By_PkArgs = {
  _set?: InputMaybe<Memos_Set_Input>;
  pk_columns: Memos_Pk_Columns_Input;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "memos" */
  memos: Array<Memos>;
  /** fetch aggregated fields from the table: "memos" */
  memos_aggregate: Memos_Aggregate;
  /** fetch data from the table: "memos" using primary key columns */
  memos_by_pk?: Maybe<Memos>;
};


export type Query_RootMemosArgs = {
  distinct_on?: InputMaybe<Array<Memos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memos_Order_By>>;
  where?: InputMaybe<Memos_Bool_Exp>;
};


export type Query_RootMemos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Memos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memos_Order_By>>;
  where?: InputMaybe<Memos_Bool_Exp>;
};


export type Query_RootMemos_By_PkArgs = {
  id: Scalars['uuid'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "memos" */
  memos: Array<Memos>;
  /** fetch aggregated fields from the table: "memos" */
  memos_aggregate: Memos_Aggregate;
  /** fetch data from the table: "memos" using primary key columns */
  memos_by_pk?: Maybe<Memos>;
};


export type Subscription_RootMemosArgs = {
  distinct_on?: InputMaybe<Array<Memos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memos_Order_By>>;
  where?: InputMaybe<Memos_Bool_Exp>;
};


export type Subscription_RootMemos_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Memos_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  order_by?: InputMaybe<Array<Memos_Order_By>>;
  where?: InputMaybe<Memos_Bool_Exp>;
};


export type Subscription_RootMemos_By_PkArgs = {
  id: Scalars['uuid'];
};

/** Boolean expression to compare columns of type "timestamptz". All fields are combined with logical 'AND'. */
export type Timestamptz_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['timestamptz']>;
  _gt?: InputMaybe<Scalars['timestamptz']>;
  _gte?: InputMaybe<Scalars['timestamptz']>;
  _in?: InputMaybe<Array<Scalars['timestamptz']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['timestamptz']>;
  _lte?: InputMaybe<Scalars['timestamptz']>;
  _neq?: InputMaybe<Scalars['timestamptz']>;
  _nin?: InputMaybe<Array<Scalars['timestamptz']>>;
};

/** Boolean expression to compare columns of type "uuid". All fields are combined with logical 'AND'. */
export type Uuid_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['uuid']>;
  _gt?: InputMaybe<Scalars['uuid']>;
  _gte?: InputMaybe<Scalars['uuid']>;
  _in?: InputMaybe<Array<Scalars['uuid']>>;
  _is_null?: InputMaybe<Scalars['Boolean']>;
  _lt?: InputMaybe<Scalars['uuid']>;
  _lte?: InputMaybe<Scalars['uuid']>;
  _neq?: InputMaybe<Scalars['uuid']>;
  _nin?: InputMaybe<Array<Scalars['uuid']>>;
};

export type GetMemoQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMemoQuery = { __typename?: 'query_root', memos: Array<{ __typename?: 'memos', id: string, title: string, content: string }> };
