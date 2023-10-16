"use client";

import styles from "./page.module.css";
import React, { useState } from 'react';

export default function CreateCard() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [image, setImage] = useState();

  const handleSubmitForm = function () {
    console.log('submitted');
  }

  return (
    <section className={styles.container}>
      <div className={styles.headerInfo}>
        <h1 className={styles.title}>Add your card</h1>
        <p className={styles.info}>Type the title, content and select an image from your pc.</p>
      </div>
      <form>
        <div>
          <label className={styles.label}>Title</label>
          <input
            name="title"
            type="text"
            placeholder="title"
            className={styles.inputDefault}
          ></input>
        </div>
        <div>
          <label className={styles.label}>Content</label>
          <textarea
            placeholder="Content"
            className={styles.inputDefault}
          ></textarea>
        </div>
        <div>
          <label className={styles.label}>File</label>
          <input name="image" type="file"></input>
        </div>
        <button className={styles.btn}>Submit</button>
      </form>
    </section>
  );
}
