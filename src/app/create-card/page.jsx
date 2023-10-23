"use client";

import { useForm } from "react-hook-form";
import styles from "./page.module.css";
import React, { useState } from "react";
import axios from "axios";
import Toasty from "./Toasty";

import PocketBase from "pocketbase";

const pb = new PocketBase("http://127.0.0.1:8090");

const pocketbaseApi = "http://127.0.0.1:8090/api/collections";

export default function CreateCard() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [open, setOpen] = useState(false);

  const { register, handleSubmit } = useForm();

  const handleSubmitForm = async function (data) {
    const image = data.image[0];

    // const newData = { title, content, image };

    const formData = new FormData();
    formData.append("title", title);
    formData.append("content", content);
    formData.append("field", image);

    /*    
    const res = await fetch(`${pocketbaseApi}/aestheticCards/records`, {
      method: "POST",
      body: JSON.stringify(formData),
    });

    const createdRecord = await pb.collection('aestheticCards').create(formData);

    */

    // axios
    //   .post(`${pocketbaseApi}/porrona/records`, formData)
    //   .then((res) => console.log(res, " te fode"))
    //   .catch((err) => console.log("deu erro nessa porra, caralho " + err));

    const createdRecord = await pb
      .collection("aestheticCards")
      .create(formData);

    console.log(createdRecord);

    setTitle("");
    setContent("");

    console.log(newData, formData);
  };

  return (
    <section className={styles.container}>
      <div className={styles.headerInfo}>
        <h1 className={styles.title}>Add your card</h1>
        <p className={styles.info}>
          Type the title, content and select an image from your pc.
        </p>
      </div>
      <form
        encType="multipart/form-data"
        onSubmit={handleSubmit(handleSubmitForm)}
      >
        <div>
          <label className={styles.label}>Title</label>
          <input
            name="title"
            type="text"
            placeholder="title"
            value={title}
            className={styles.inputDefault}
            onChange={(e) => setTitle(e.target.value)}
          ></input>
        </div>
        <div>
          <label className={styles.label}>Content</label>
          <textarea
            placeholder="Content"
            value={content}
            className={styles.inputDefault}
            onChange={(e) => setContent(e.target.value)}
          ></textarea>
        </div>
        <div>
          <label className={styles.label}>File</label>
          <input
            {...register("image")}
            accept="image/*"
            name="image"
            type="file"
          ></input>
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
      <Toasty isOpen={open}/>
    </section>
  );
}
