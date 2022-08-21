import React from 'react';
import { branch, compose, lifecycle, renderNothing, withState } from 'recompose';

interface ILoader {
  showLoader: boolean;
  setShowLoader: (showLoader: boolean) => void;
}

export const Loader = () => {
  let timerId: NodeJS.Timer;

  return React.createElement(
    compose(
      withState<ILoader, boolean, string, string>('showLoader', 'setShowLoader', false),
      lifecycle<ILoader, ILoader>({
        componentDidMount() {
          timerId = setTimeout(() => this.props.setShowLoader(true), 200);
        },
        componentWillUnmount() {
          if (timerId) {
            clearTimeout(timerId);
          }
        },
      }),
      branch(({ showLoader }: ILoader) => !showLoader, renderNothing),
    )(() => (
      <div className="loader">
        <div className="loader__item">
          <div className="loader__item-body" />
        </div>
      </div>
    )),
  );
};
