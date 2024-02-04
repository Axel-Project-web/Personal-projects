import { FormEventHandler, ChangeEventHandler, MouseEventHandler } from "react";

interface UserInterface {
    email: string;
    notes: Array<any>;
}

interface MessageInterface {
    content: string;
    display: boolean;
}

interface DisplayerInterface {
    keyboard: {
        show: boolean;
    };
    sideBar: {
        show: boolean;
    };
}

interface NoteType {
  text: string,
  fontSize: number,
  color: string,
  title: string,
  justify: string,
  fontFamily: string,
  isSelected: boolean,
}

interface ErrorType {
    email?: string;
    phone?: string;
    password?: string;
    rePassword?: string;
  }
  
  interface ItemFormType {
    value: string,
    isValid: boolean
  }
  
  interface FormSingupType {
    email: ItemFormType,
    phone: ItemFormType,
    password: ItemFormType,
    rePassword: ItemFormType,
  }

  interface FormLoginErrorType {
    email: string,
    password: string,
  }

  interface FormLoginType {
    email: ItemFormType,
    password: ItemFormType,
  } 

  type ReturnTypeHookSingup = [
    boolean,
    GotoType,
    ErrorType,
    FormSingupType,
    FormEventHandler,
    ChangeEventHandler,
  ]

  type ReturnTypeHookLogin = [
    GotoType,
    FormLoginType,
    FormLoginErrorType,
    FormEventHandler,
    ChangeEventHandler,
  ]
  
  interface GotoType {
    handleNavigation: MouseEventHandler,
    text: string
  }
  
type KeyOfFormType = keyof FormSingupType;


export type {
    NoteType,
    GotoType,
    ErrorType,
    ItemFormType,
    UserInterface,
    FormLoginType,
    KeyOfFormType,
    FormSingupType,
    MessageInterface,
    DisplayerInterface,
    FormLoginErrorType,
    ReturnTypeHookLogin,
    ReturnTypeHookSingup,
  }