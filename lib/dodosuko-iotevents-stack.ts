import { Stack, StackProps } from "aws-cdk-lib";
import { Construct } from "constructs";
import * as iotevents from "@aws-cdk/aws-iotevents-alpha";

export class DodosukoIoteventsStack extends Stack {
  constructor(scope: Construct, id: string, props?: StackProps) {
    super(scope, id, props);

    const input = new iotevents.Input(this, "Input", {
      inputName: "DodosukoInput",
      attributeJsonPaths: ["phrase"],
    });

    const s00 = new iotevents.State({
      stateName: "s00",
      onEnter: [
        {
          eventName: "initialize",
          condition: iotevents.Expression.currentInput(input),
        },
      ],
    });
    const s01 = new iotevents.State({ stateName: "s01" });
    const s02 = new iotevents.State({ stateName: "s02" });
    const s03 = new iotevents.State({ stateName: "s03" });
    const s04 = new iotevents.State({ stateName: "s04" });
    const s05 = new iotevents.State({ stateName: "s05" });
    const s06 = new iotevents.State({ stateName: "s06" });
    const s07 = new iotevents.State({ stateName: "s07" });
    const s08 = new iotevents.State({ stateName: "s08" });
    const s09 = new iotevents.State({ stateName: "s09" });
    const s10 = new iotevents.State({ stateName: "s10" });
    const s11 = new iotevents.State({ stateName: "s11" });
    const s12 = new iotevents.State({ stateName: "s12" });

    const phraseIs = (phrase: string) =>
      iotevents.Expression.eq(
        iotevents.Expression.inputAttribute(input, "phrase"),
        iotevents.Expression.fromString(`"${phrase}"`)
      );

    s00.transitionTo(s01, { when: phraseIs("ドド") });
    s01.transitionTo(s02, { when: phraseIs("スコ") });
    s02.transitionTo(s03, { when: phraseIs("スコ") });
    s03.transitionTo(s04, { when: phraseIs("スコ") });
    s04.transitionTo(s05, { when: phraseIs("ドド") });
    s05.transitionTo(s06, { when: phraseIs("スコ") });
    s06.transitionTo(s07, { when: phraseIs("スコ") });
    s07.transitionTo(s08, { when: phraseIs("スコ") });
    s08.transitionTo(s09, { when: phraseIs("ドド") });
    s09.transitionTo(s10, { when: phraseIs("スコ") });
    s10.transitionTo(s11, { when: phraseIs("スコ") });
    s11.transitionTo(s12, { when: phraseIs("スコ") });

    s02.transitionTo(s01, { when: phraseIs("ドド") });
    s03.transitionTo(s01, { when: phraseIs("ドド") });
    s04.transitionTo(s00, { when: phraseIs("スコ") });
    s05.transitionTo(s01, { when: phraseIs("ドド") });
    s06.transitionTo(s01, { when: phraseIs("ドド") });
    s07.transitionTo(s01, { when: phraseIs("ドド") });
    s08.transitionTo(s00, { when: phraseIs("スコ") });
    s09.transitionTo(s01, { when: phraseIs("ドド") });
    s10.transitionTo(s01, { when: phraseIs("ドド") });
    s11.transitionTo(s01, { when: phraseIs("ドド") });

    s12.transitionTo(s00, { when: phraseIs("スコ") });
    s12.transitionTo(s01, { when: phraseIs("ドド") });

    new iotevents.DetectorModel(this, "DodosukoDetectorModel", {
      detectorModelName: "DodosukoDetectorModel",
      initialState: s00,
    });
  }
}
