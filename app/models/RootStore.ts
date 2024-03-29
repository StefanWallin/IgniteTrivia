import { Instance, SnapshotOut, types } from "mobx-state-tree"
import { QuestionStore, QuestionStoreModel } from "./QuestionStore"

/**
 * A RootStore model.
 */
export const RootStoreModel = types.model("RootStore").props({
  questionStore: types.optional(QuestionStoreModel, {} as QuestionStore),
})

/**
 * The RootStore instance.
 */
export interface RootStore extends Instance<typeof RootStoreModel> {}
/**
 * The data of a RootStore.
 */
export interface RootStoreSnapshot extends SnapshotOut<typeof RootStoreModel> {}
