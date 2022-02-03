import { ChangeEvent, KeyboardEvent } from "react";

export interface IPropsCommentsWriteUI {
  resize: (e: KeyboardEvent<HTMLTextAreaElement>) => void;
  onChangeContents: (e: ChangeEvent<HTMLTextAreaElement>) => void;
  onChangeWriterInfo: (e: ChangeEvent<HTMLInputElement>) => void;
  onClickSubmit: () => void;
  contents: string;
  writerInfo: { writer: string; password: string; rating: number };
}
