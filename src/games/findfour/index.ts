import { GameMode } from '../../App/Game/GameModePicker';
import { IGameModeExtraInfoDropdown } from '../../App/Game/GameModePicker';
import TicTacToeThumbnail from './media/thumbnail.png';
import { IGameDef } from '../../games';
import instructions from './instructions.md';

export const findfourGameDef: IGameDef = {
  code: 'findfour',
  name: 'Find Four',
  minPlayers: 2,
  maxPlayers: 2,
  imageURL: TicTacToeThumbnail,
  modes: [{ mode: GameMode.OnlineFriend }, { mode: GameMode.LocalFriend }],
  description: 'A Classic Game',
  descriptionTag: `Play Tic-Tac-Toe (also called Noughts and Crosses) for \
 free online. You can either do a single-player game against the computer,\
 a multi-player game against a friend online or share your device and play\
 locally against a friend.`,
  config: () => import('./config'),
  instructions: {
    videoId: 'Yw8pK6Ak5oE',
  },
};
