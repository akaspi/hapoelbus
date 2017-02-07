import React from 'react';
import createComponent from 'react-unit';
import LoadingStore from '../../mobx/stores/loadingStore';
import LoadingAPI from '../../api/loadingAPI';
import Spinner from '../../src/components/Spinner';

describe('Spinner Component', () => {

  it('should be observer', () => {
    expect(Spinner.wrappedComponent.isMobXReactObserver).toBe(true);
  });

  it('should be hidden', () => {
    const loadingStore = new LoadingStore();
    const loadingAPI = new LoadingAPI({loadingStore});

    const spinner = createComponent(<Spinner.wrappedComponent loadingAPI={loadingAPI}/>);
    const overlayNode = spinner.findByQuery('.overlay')[0];

    expect(overlayNode.props.className).toContain('hide');
  });

  it('it should be visible', () => {
    const loadingStore = new LoadingStore();
    const loadingAPI = new LoadingAPI({loadingStore});

    loadingStore.startPendingRequest();

    const spinner = createComponent(<Spinner.wrappedComponent loadingAPI={loadingAPI}/>);
    const overlayNode = spinner.findByQuery('.overlay')[0];

    expect(overlayNode.props.className).not.toContain('hide');
  });

});

