import { FormModel } from "./forms.model";

export const getForms = () => FormModel.find();

export const getFormById = (id: string) => FormModel.findById(id);

export const createForm = (values: Record<string, any>) =>
  new FormModel(values).save().then((form) => form.toObject());

export const deleteFormById = (id: string) =>
  FormModel.findOneAndDelete({ _id: id });

export const updateFormById = (id: string, values: Record<string, any>) =>
  FormModel.findByIdAndUpdate(id, values);
