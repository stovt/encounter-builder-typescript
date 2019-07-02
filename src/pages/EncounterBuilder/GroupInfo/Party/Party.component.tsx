import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { PartyLevels } from 'shared/types/encounterBuilder';
import {
  useAddPartyLevelDispatch,
  useSetPartyLevelDispatch,
  useSetPartyPlayerCountDispatch
} from 'pages/EncounterBuilder/EncounterBuilder.actions';
import Select from './Select';
import RemovePartyLevelButton from './RemovePartyLevelButton';
import StyledAddPartyLevelButton from './AddPartyLevelButton';
import { MAX_PLAYER_COUNT, MAX_LEVEL } from './Party.constants';
import { StyledPartyWrapper, StyledParty, StyledPartyItem } from './Party.styled';

interface Props {
  partyLevels: PartyLevels;
}

const Party: React.FC<Props> = ({ partyLevels }) => {
  const addPartyLevel = useAddPartyLevelDispatch();
  const setPartyLevel = useSetPartyLevelDispatch();
  const setPartyPlayerCount = useSetPartyPlayerCountDispatch();

  return (
    <>
      <StyledPartyWrapper>
        <StyledParty>
          <StyledPartyItem>
            <b>
              <FormattedMessage id='group-info.players' />:
            </b>
          </StyledPartyItem>
          {partyLevels.map(partyLevel => (
            <StyledPartyItem key={partyLevel.id}>
              <Select
                onChange={setPartyPlayerCount}
                value={partyLevel.playerCount}
                maxValue={MAX_PLAYER_COUNT}
                id={partyLevel.id}
              />
            </StyledPartyItem>
          ))}
        </StyledParty>
        <StyledParty>
          <StyledPartyItem>
            <b>
              <FormattedMessage id='group-info.level' />:
            </b>
          </StyledPartyItem>
          {partyLevels.map(partyLevel => (
            <StyledPartyItem key={partyLevel.id}>
              <Select
                onChange={setPartyLevel}
                value={partyLevel.level.level}
                maxValue={MAX_LEVEL}
                id={partyLevel.id}
              />
            </StyledPartyItem>
          ))}
        </StyledParty>
        <StyledParty>
          <StyledPartyItem>&nbsp;</StyledPartyItem>
          {partyLevels.map((partyLevel, index) =>
            index ? (
              <StyledPartyItem key={partyLevel.id}>
                <RemovePartyLevelButton id={partyLevel.id} />
              </StyledPartyItem>
            ) : (
              <StyledPartyItem key={partyLevel.id} />
            )
          )}
        </StyledParty>
      </StyledPartyWrapper>
      <StyledAddPartyLevelButton onClick={addPartyLevel} />
    </>
  );
};

export default Party;
