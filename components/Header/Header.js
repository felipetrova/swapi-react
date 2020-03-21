import * as Style from "./HeaderStyle";
import * as GridStyle from "~/styles/Grid";
import { ArrowLeft } from "~/styles/Icons";

import Link from "next/link";

export default function header({ title, slugPage, directory, logo }) {
  return (
    <Style.Header className="bg-yellow">
      <GridStyle.Row className="no-gutters">
        <GridStyle.Col
          className="flex align-itcenter no-margin no-padding"
          mobile={1}
          tablet={3}
        >
          <Link href={`${directory}`} as={`${slugPage}`}>
            <ArrowLeft className="tx-blue fn-wb" />
          </Link>
        </GridStyle.Col>
        <GridStyle.Col
          className="flex align-itcenter cont-center no-margin"
          mobile={10}
          tablet={3}
        >
          <p className="fn-s18px fn-wb tx-blue">{title}</p>
          {logo && <img src={logo} alt="SWAPI" />}
        </GridStyle.Col>
        <GridStyle.Col
          className="flex align-itcenter no-margin"
          mobile={1}
          tablet={3}
        ></GridStyle.Col>
      </GridStyle.Row>
    </Style.Header>
  );
}
