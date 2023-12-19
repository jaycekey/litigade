import express from "express";

import {
  getForms,
  getFormById,
  createForm,
  deleteFormById,
  updateFormById,
} from "./forms.services";

export const getAllForms = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const forms = await getForms();
    return res.status(200).json(forms);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const postForm = async (req: express.Request, res: express.Response) => {
  try {
    const { clientName, email, department, time } = req.body;

    if (!clientName || !email || !department || !time) {
      return res.status(400).json({
        error: "ClientName, email, department, and time are required.",
      });
    }

    const newForm = await createForm({
      clientName,
      email,
      department,
      time,
    });

    return res.status(201).json(newForm);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const deleteForm = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;

    const deletedForm = await deleteFormById(id);

    return res.json(deletedForm);
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};

export const updateForm = async (
  req: express.Request,
  res: express.Response
) => {
  try {
    const { id } = req.params;
    const { clientName, email, department, time } = req.body;

    const form = await getFormById(id);

    if (!form) {
      return res.status(404).json({ error: "Form not found" });
    }
    const updatedFields = {
      clientName: clientName || form.clientName,
      email: email || form.email,
      department: department || form.department,
      time: time || form.time,
    };

    Object.assign(form, updatedFields);

    await updateFormById(id, form);

    return res.status(200).json(form).end();
  } catch (error) {
    console.log(error);
    return res.sendStatus(400);
  }
};
