import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { EncounterBuilderAction, PartyLevels } from 'shared/types/encounterBuilder';
import Select from './Select';
import RemovePartyLevelButton from './RemovePartyLevelButton';
import StyledAddPartyLevelButton from './AddPartyLevelButton';
import { MAX_PLAYER_COUNT, MAX_LEVEL } from './Party.constants';
import { StyledPartyWrapper, StyledParty, StyledPartyItem } from './Party.styled';

interface Props {
  partyLevels: PartyLevels;
  addPartyLevel: () => EncounterBuilderAction;
  removePartyLevel: (id: string) => EncounterBuilderAction;
  setPartyLevel: (value: number, id: string) => EncounterBuilderAction;
  setPartyPlayerCount: (value: number, id: string) => EncounterBuilderAction;
}

const Party: React.FC<Props> = ({
  partyLevels,
  setPartyPlayerCount,
  setPartyLevel,
  removePartyLevel,
  addPartyLevel
}) => (
  <>
    <StyledPartyWrapper>
      <StyledParty>
        <StyledPartyItem>
          <b>
            <FormattedMessage id='group-info.players' />:
          </b>
        </StyledPartyItem>
        <StyledPartyItem>
          <b>
            <FormattedMessage id='group-info.level' />:
          </b>
        </StyledPartyItem>
      </StyledParty>
      {partyLevels.map((partyLevel, index) => (
        <StyledParty key={partyLevel.id}>
          <StyledPartyItem>
            <Select
              onChange={setPartyPlayerCount}
              value={partyLevel.playerCount}
              maxValue={MAX_PLAYER_COUNT}
              id={partyLevel.id}
            />
          </StyledPartyItem>
          <StyledPartyItem>
            <Select
              onChange={setPartyLevel}
              value={partyLevel.level.level}
              maxValue={MAX_LEVEL}
              id={partyLevel.id}
            />
          </StyledPartyItem>
          {!!index && (
            <StyledPartyItem>
              <RemovePartyLevelButton removePartyLevel={removePartyLevel} id={partyLevel.id} />
            </StyledPartyItem>
          )}
        </StyledParty>
      ))}
    </StyledPartyWrapper>
    <StyledAddPartyLevelButton onClick={addPartyLevel} />
  </>
);

export default Party;
