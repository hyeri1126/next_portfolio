import styles from "./MarqueeTextSection.module.css";
import { forwardRef } from "react";

function MarqueeTextSection(props, ref){
  
  return(
    <div ref={ref} className={`marquee-section ${styles.wrapperBox}`}>
      <div className={styles.wrapper}>
        <div className={styles.textContainer}> 
            <div className={styles.marqueeGroup}>
              <h1>Thank you for taking time to view my portfolio</h1>
              <h1>Thank you for taking time to view my portfolio</h1>
              <h1>Thank you for taking time to view my portfolio</h1>
              <h1>Thank you for taking time to view my portfolio</h1>
            </div>
            <div className={`${styles.marqueeGroup} ${styles.marqueeGroup2}`}>
              <h1>Thank you for taking time to view my portfolio</h1>
              <h1>Thank you for taking time to view my portfolio</h1>
              <h1>Thank you for taking time to view my portfolio</h1>
              <h1>Thank you for taking time to view my portfolio</h1>
            </div>
        </div>
      </div>
    </div>
 
  )
}

export default forwardRef(MarqueeTextSection);