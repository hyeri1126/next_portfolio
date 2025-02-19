import styles from "./AboutSection.module.css";
import Image from "next/image";

export default function AboutSection(){
    return(
        <div className={styles.container}>
            <div className={styles.title}>
                <div className={styles.titleText}>About</div>
            </div>
            <div className={styles.pearlBox}>
                <Image
                    src="/images/pearl.png"
                    fill
                    alt="kitty"
                    className={styles.pearlImg}
                />
            </div>
            <div className={styles.textBoxs}>
                <div className={styles.aboutText}>
                    About <br /> Me
                </div>
                <div className={styles.textBox}>
                    안녕하세요:) <br />
                    저는 사용자가 새롭고 다채로운 웹 세상에 깊이 몰입할 수 있도록
                    웹 세계를 설계하는 프론트엔드 개발자입니다. <br />

                    한 번도 느껴보지 못한 재미있고 편리한 웹 경험을 선물하는 것이 저의 궁극적인 목표입니다. <br />

                    항상 성장하고 노력하며, 더 나은 웹 세상을 만들어가겠습니다. <br />
                </div>
            </div>
      
        
        </div>
    )
}