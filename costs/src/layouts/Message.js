import styles from "./Message.module.css";
import { useState, useEffect } from "react";

function Message({ type, msg }) {
  const [visible, setVisible] = useState(false);

  useEffect(() =>{

    if(!msg){
      setVisible(false)
      return
      // Não tem mensagem, não exibe(false)
    }
    setVisible(true)
    // Se tem mensagem, aparece por 3s
    const timer = setTimeout(() =>{
      setVisible(false)
    }, 3000)

     return () => clearTimeout(timer)
    //  Para finalizar o tempo
  }, [msg])

  return (
    <>
      {visible && (
        <div className={`${styles.message} ${styles[type]}`}>{msg} </div>
      )}
    </>
  );
}

export default Message;
