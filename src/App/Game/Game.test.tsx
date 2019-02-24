import React from 'react';
import Game from './Game';
import { mount, shallow } from 'enzyme';
import { expect } from 'chai';
import asyncBootstrapper from 'react-async-bootstrapper';
import { GAMES_MAP } from '../../games';
import { MemoryRouter } from 'react-router';

describe('Game', () => {

  it('should render properly for multiplayer', async () => {
    const app = (
      <MemoryRouter>
        <Game match={{ params: { gameCode: 'chess', mode: 'online' } }} />
      </MemoryRouter>
    );
    await asyncBootstrapper(app);
    const wrapper = mount(app);
    expect(wrapper.html()).to.contain('Connecting');
  });

  it('should render properly for singleplayer', async () => {
    const app = (
      <MemoryRouter>
        <Game match={{ params: { gameCode: 'chess', mode: 'local' } }} />
      </MemoryRouter>
    );
    await asyncBootstrapper(app);
    const wrapper = mount(app);
    expect(wrapper.find('Checkerboard').length).to.equal(1);
  });

  it('should render error correctly', async () => {
    GAMES_MAP.chess.config = () => Promise.reject(new Error('fail'));
    const app = (
      <MemoryRouter>
        <Game match={{ params: { gameCode: 'chess', mode: 'local' } }} />
      </MemoryRouter>
    );
    await asyncBootstrapper(app);
    const wrapper = mount(app);
    expect(wrapper.html()).to.contain('Fail');
  });

  it('should render loading correctly', () => {
    const app = (
      <MemoryRouter>
        <Game match={{ params: { gameCode: 'chess', mode: 'local' } }} />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    (wrapper.find(Game).instance() as any).clear();
    (wrapper.find(Game).instance() as any).forceUpdate();
    expect(wrapper.html()).to.contain('Downloading');
  });

  it('should render an error for an unknown game', () => {
    const app = (
      <MemoryRouter>
        <Game match={{ params: { gameCode: 'doesnotexist', mode: 'local' } }} />
      </MemoryRouter>
    );
    const wrapper = mount(app);
    expect(wrapper.html()).to.contain('Not Found');
  });
});
