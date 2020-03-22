import * as Style from "./HeaderStyle";
import * as GridStyle from "~/styles/Grid";

export default function header({ title, logo }) {
  return (
    <Style.Header className="bg-yellow">
      <GridStyle.Row className="no-gutters">
        <GridStyle.Col
          className="flex align-itcenter no-margin no-padding"
          mobile={1}
          tablet={3}
          general={4}
        >
        </GridStyle.Col>
        <GridStyle.Col
          className="flex align-itcenter cont-center no-margin"
          mobile={10}
          tablet={3}
          general={4}
        >
          <p className="fn-s18px fn-wb tx-blue">{title}</p>
          {logo && <img src={logo} alt="SWAPI" />}
        </GridStyle.Col>
        <GridStyle.Col
          className="flex align-itcenter no-margin"
          mobile={1}
          tablet={3}
          general={4}
        ></GridStyle.Col>
      </GridStyle.Row>
    </Style.Header>
  );
}
