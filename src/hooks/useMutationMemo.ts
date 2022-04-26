import { gql, useMutation } from "@apollo/client";
import type {
  Mutation_RootDelete_Memos_By_PkArgs,
  Mutation_RootUpdate_Memos_By_PkArgs,
} from "type/_generated_/graphql";

export const useMutationMemo = () => {
  const [update, { loading: updateIsLoading }] =
    useMutation<Mutation_RootUpdate_Memos_By_PkArgs["_set"]>(updateMemo);
  const [deleteFunc, { loading: deleteIsLoading }] =
    useMutation<Mutation_RootDelete_Memos_By_PkArgs>(deleteMemo);
  return {
    deleteFunc,
    update,
    updateIsLoading,
    deleteIsLoading,
  };
};

const updateMemo = gql`
  mutation updateMemo($id: uuid!, $title: String, $content: String) {
    update_memos_by_pk(
      pk_columns: { id: $id }
      _set: { title: $title, content: $content }
    ) {
      title
      content
    }
  }
`;

const deleteMemo = gql`
  mutation deleteMemo($id: uuid!) {
    delete_memos_by_pk(id: $id) {
      id
    }
  }
`;
