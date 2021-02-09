import styled from "styled-components";

export const AvatarContainer = styled.div`
  width: 113px;
  height: 113px;
  border-radius: 50%;
  background: ${({ theme }) => theme.colors.mediumGray};
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
`;
