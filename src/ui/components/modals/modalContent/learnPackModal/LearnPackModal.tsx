import React, { useEffect, useState } from 'react';

import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';

import { setCards } from '../../../../../bll/slices/cardsSlice';
import { AppRootStateType, useAppDispatch } from '../../../../../bll/store';
import { PATH } from '../../../../../common/constants/constants';
import { CardType } from '../../../../../dal/cards';
import Button from '../../../button/Button';
import s from '../../../Pack/Pack.module.scss';
import Preloader from '../../../preloader/Preloader';
import SuperRadio from '../../../superRadio/SuperRadioSelect';
import Modal from '../../modal/Modal';

const grades = [
  'Did not know',
  'Forgot',
  'A lot of thought',
  'Confused',
  'Knew the answer',
];

const LearnPackModal: React.FC<EditPacksModalPropsType> = ({
  _id,
  redirectToLearnCard,
}) => {
  const [active, setActive] = useState<boolean>(false);
  const [value, setValue] = useState<string>();

  const actionCallback = () => {
    setActive(false);
  };

  const openModal = () => {
    setActive(true);
  };

  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  // const { packId } = useParams<{ packId: string }>();
  const packName = useSelector(
    (state: AppRootStateType) =>
      state.packs.cardsPack.filter((p: any) => p._id === _id)[0]?.name,
  );
  const [isVisible, setIsVisible] = useState(false);
  const [rating, setRating] = useState('');
  const [first, setFirst] = useState<boolean>(true);

  // const isLoading = useAppSelector<boolean>(state => state.app.isLoading)

  const getCard = (cards: CardType[]) => {
    const sum = cards.reduce((acc, card) => acc + (6 - card.grade) * (6 - card.grade), 0);
    const rand = Math.random() * sum;
    const res = cards.reduce(
      (acc: { sum: number; id: number }, card, i) => {
        const newSum = acc.sum + (6 - card.grade) * (6 - card.grade);
        return { sum: newSum, id: newSum < rand ? i : acc.id };
      },
      { sum: 0, id: -1 },
    );
    // console.log('test: ', sum, rand, res);

    return cards[res.id + 1];
  };

  useEffect(() => {
    _id && dispatch(setCards(_id));
    return () => {
      // dispatch(clearCards());
    };
  }, []);

  const cards = useSelector((state: AppRootStateType) => state.cards.cards);
  const [card, setCard] = useState<any>(null);

  useEffect(() => {
    if (cards.length > 0) setCard(getCard(cards));
    // console.log(cards);
  }, [cards]);

  const onNextClick = () => {
    setIsVisible(false);
    // console.log(cards);
    if (cards.length > 0) setCard(getCard(cards));
  };

  return (
    <div>
      <Modal
        setActive={setActive}
        isOpen={active}
        actionButton={<Button variant="edit_learn" name="Learn" onClick={openModal} />}
      >
        <div className={s.packLearnModal}>
          <div>
            {card ? (
              <div className={s.wrapper}>
                <span>Learn {packName}</span>
                <p>
                  <b>Question: </b>
                  {card.question}
                </p>

                {isVisible && (
                  <>
                    <h3>Answer:</h3>
                    <p>{card.answer}</p>
                    <h3>Rate yourself:</h3>
                    <SuperRadio
                      name="radio"
                      options={grades}
                      value={rating}
                      onChangeOption={setRating}
                    />
                  </>
                )}

                <nav>
                  <Button variant="cancel_auth" onClick={() => navigate(PATH.PROFILE)}>
                    Cansel
                  </Button>
                  {isVisible ? (
                    <Button variant="auth" onClick={onNextClick} disabled={!rating}>
                      Next
                    </Button>
                  ) : (
                    <Button variant="auth" onClick={() => setIsVisible(true)}>
                      Show answer
                    </Button>
                  )}
                </nav>
              </div>
            ) : (
              <Preloader />
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

type EditPacksModalPropsType = {
  _id?: string;
  redirectToLearnCard?: () => void;
};

export default LearnPackModal;
