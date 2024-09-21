import { theme } from 'antd';
import { ArcherContainer, ArcherElement } from 'react-archer';

import { MapCard } from './card/MapCard';

import { TCourse } from '../../../types/entities/TCourse';

import styles from './styles.module.scss';

const courses: TCourse[] = [
  {
    id: 1,
    name: 'Пираты 1',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 2,
    name: 'Пираты 2',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 3,
    name: 'Пираты 3',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 4,
    name: 'Пираты 4',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 5,
    name: 'Пираты 1',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 6,
    name: 'Пираты 2',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 7,
    name: 'Пираты 3',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 8,
    name: 'Пираты 4',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 9,
    name: 'Пираты 1',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 10,
    name: 'Пираты 2',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 11,
    name: 'Пираты 3',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg',
  },
  {
    id: 12,
    name: 'Пираты 4',
    description:
      'Повседневная практика показывает, что синтетическое тестирование однозначно фиксирует необходимость системы массового участия.',
    photoUrl:
      'https://i.pinimg.com/564x/e1/e1/3a/e1e13a15e6ebbb045cc777e9c4bd81fb.jpg'
  }
];

type TMapProps = {
  categoryId: string
}

export const Map = ({ categoryId }: TMapProps) => {
  const { colorPrimary } = theme.useToken().token;

  const getIdCard = (index: number) => {
    return index === 0 ? 'root' : `element-${index}`;
  };

  const getTargetId = (index: number) => {
    return `element-${index + 1}`;
  };

  const getTargetPositionTarget = (index: number) => {
    if (index % 3 == 0) {
      return 'right';
    } else {
      return 'top';
    }
  };

  const getTargetPositionSource = (index: number) => {
    if (index % 3 == 1) {
      return 'left';
    } else {
      return 'bottom';
    }
  };
  return (
    <div className={styles.map}>
      <div className={styles.content}>
        <ArcherContainer
          strokeColor={colorPrimary}
          endMarker={false}
          strokeWidth={4}
        >
          <div className={styles.tree}>
            {courses.map((course, index) => (
              <ArcherElement
                id={getIdCard(index)}
                key={course.id}
                relations={[
                  {
                    targetId: getTargetId(index),
                    targetAnchor: getTargetPositionTarget(index),
                    sourceAnchor: getTargetPositionSource(index),
                  },
                ]}
              >
                <div className={styles.wrapper}>
                  <MapCard card={course} categoryId={categoryId} index={index}/>
                </div>
              </ArcherElement>
            ))}
          </div>
        </ArcherContainer>
      </div>
    </div>
  );
};
