import React, {useState} from 'react';
import {ContainerForButtons,
    Display, NumberFiveText,
    NumbersText, Container, Button
} from './CounterDisplayStyle';

export const CounterDisplay = () => {
    let [numberForCounter, setNumberForCounter] = useState<number>(0)
    let [disabledIncrement, setDisabledIncrement] = useState<boolean>(false)
    let [disabledReset, setDisabledReset] = useState<boolean>(true)

    const counterLimiter = (disabled: boolean): void => {
        setNumberForCounter(numberForCounter + 1);
        switch (numberForCounter) {
            case 0:
                setDisabledReset(disabled)
                break;
            case 4:
                setDisabledIncrement(!disabled)
                break;
        }
    }
    const resetNumber = (disabled: boolean): void => {
        setNumberForCounter(0)
        setDisabledReset(!disabled)
        if (numberForCounter === 5) {
            setDisabledIncrement(disabled)
        }
    }

    const number =
      numberForCounter === 5
        ? <NumberFiveText>{numberForCounter}</NumberFiveText>
        : <NumbersText>{numberForCounter}</NumbersText>

    return (
      <Container>
          <Display>
              {number}
          </Display>
          <ContainerForButtons>
              <Button onClick={(event) => {counterLimiter(event.currentTarget.disabled)}}
                      disabled={disabledIncrement}>
                  inc
              </Button>
              <Button onClick={(event) => {resetNumber(event.currentTarget.disabled)}}
                      disabled={disabledReset}>
                  reset
              </Button>
          </ContainerForButtons>
      </Container>
    );
};

