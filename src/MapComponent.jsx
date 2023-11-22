import MapViewer from "./MapViewer";

import "@esri/calcite-components/dist/components/calcite-navigation-logo";
import "@esri/calcite-components/dist/components/calcite-navigation-user";
import "@esri/calcite-components/dist/components/calcite-shell";
import "@esri/calcite-components/dist/components/calcite-navigation";
import "@esri/calcite-components/dist/components/calcite-shell-panel";
import "@esri/calcite-components/dist/components/calcite-panel";
import "@esri/calcite-components/dist/components/calcite-block";
import "@esri/calcite-components/dist/components/calcite-icon";
import "@esri/calcite-components/dist/components/calcite-action";
import "@esri/calcite-components/dist/components/calcite-tooltip";
import "@esri/calcite-components/dist/components/calcite-list";

import {
  CalciteNavigationLogo,
  CalciteNavigationUser,
  CalciteShell,
  CalciteNavigation,
  CalciteShellPanel,
  CalcitePanel,
  CalciteBlock,
  CalciteIcon,
  CalciteAction,
  CalciteTooltip,
  CalciteList,
} from "@esri/calcite-components-react";

const MapComponent = () => {
  return (
    <>
      <CalciteShell>
        <CalciteNavigation slot="header">
          <CalciteNavigationLogo
            slot="logo"
            heading="Impact of RO Smart Water Systems on the Enviroment"
          />
          <CalciteNavigationUser
            slot="user"
            fullName="sample user"
            username="i_love_maps"
          />
        </CalciteNavigation>
        <MapViewer />
        <CalciteShellPanel slot="panel-start">
          <CalcitePanel heading="Map Filters">
            <CalciteAction
              slot="header-actions-end"
              id="toggle-instructions"
              text="Instructions"
              icon="lightbulb"
            >
              <CalciteTooltip
                placement="right"
                overlayPositioning="fixed"
                referenceElement="toggle-instructions"
              >
                Explore the data below
              </CalciteTooltip>
            </CalciteAction>
            <CalciteBlock collapsible heading="Data Pre RO Smart Water System">
              <CalciteIcon slot="icon" icon="hamburger" scale="s"></CalciteIcon>
              <CalciteList
                id="Data List 1"
                selectionMode="mutiple"
              ></CalciteList>
              <CalciteList id="Data List 2" selectionMode="mutiple">
                Data 2
              </CalciteList>
            </CalciteBlock>
            <CalciteBlock
              collapsible
              open
              heading="Data Post RO Smart Water System"
            >
              <CalciteIcon slot="icon" icon="hamburger" scale="s"></CalciteIcon>
            </CalciteBlock>
            <CalciteBlock collapsible heading="Under Represented Communities">
              <CalciteIcon slot="icon" icon="home" scale="s"></CalciteIcon>
              <CalciteList
                id="Approxmite Location"
                selectionMode="mutiple"
              ></CalciteList>
            </CalciteBlock>
          </CalcitePanel>
        </CalciteShellPanel>
      </CalciteShell>
    </>
  );
};
export default MapComponent;
