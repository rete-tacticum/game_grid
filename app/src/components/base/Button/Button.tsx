import React from 'react';
import { nanoid } from 'nanoid';
import classnames from 'classnames';
import { useState } from 'react';
import BackgroundImage from '_assets/svg/menuItem.svg';
import { RandomizeText } from '_components/misc/RandomizeText/RandomizeText';
import { ButtonProps } from '_interfaces/components/base/Button';
import styles from './styles.module.scss';


export const Button = ({text, scrambleRate, className, isAnimated=true, ...rootDOMAttributes}: ButtonProps) => {
  const rate = scrambleRate || 500;
  const [hovering, setHovering] = useState(false);
  const [trigger, setTrigger] = useState('default');

  const triggerOnHover = () => {
    if (!hovering) setTrigger(nanoid());
    setHovering(true);
  }

  return (
    <div className={classnames(className, styles.root)}
         onMouseEnter={triggerOnHover}
         onFocus={triggerOnHover}
         onMouseLeave={() => setHovering(false)}
         onBlur={() => setHovering(false)}
         {...rootDOMAttributes}
    >
      {
        // триггер полностью делает ремаунт, иначе некрасиво
        // todo: с id можно навесить другую анимацию (в другую сторону строки, с большим таймингом)
        isAnimated ? <RandomizeText key={trigger} value={text} className={styles.title} rate={rate}/>
                   : <span className={styles.title}>{text}</span>
      }
      <BackgroundImage className={styles.background}/>
    </div>
  )
}
