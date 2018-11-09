import styled from './styled-components';

import { COMMON, SCHEMA_1, SCHEMA_2, SCHEMA_3 } from './variables';

export const MainStage = styled.div`
         margin-left: 300px;
         overflow: hidden;
         //min-height: 450px;
         background-color: ${COMMON.COLOR_1};

         div {
           margin: 50px;
           height: 300px;
           padding: 30px;
           border: 1px solid ${SCHEMA_1.COLOR_1};
         }`;
