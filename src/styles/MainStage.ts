import styled from './styled-components';

import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const MainStage = styled.div`
         overflow: scroll;
        // min-height: 450px;
         background-color: ${COMMON.COLOR_1};

         div {
           margin: 5px;
           padding: 10px;
           border: 1px solid ${SCHEMA_1.COLOR_1};
         }`;
