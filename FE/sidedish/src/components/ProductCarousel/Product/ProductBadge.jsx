import React from "react";
import styled from "@emotion/styled";

const BadgeContainer = styled.div`
  height: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Badge = styled.div`
  background: #91a9be;
  color: #fff;
  font-weight: 600;
  min-width: 52px;
  font-size: 11px;
  padding: 5px;
  & + & {
    margin-left: 1rem;
  }
`;

const ProductBadge = ({ badgedata }) => {
  if (!badgedata) return null;
  return (
    <BadgeContainer>
      {badgedata.map((badge) => (
        <Badge>
          <span>{badge}</span>
        </Badge>
      ))}
    </BadgeContainer>
  );
};

export default ProductBadge;
