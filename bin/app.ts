import * as cdk from "aws-cdk-lib";
import { DodosukoIoteventsStack } from "../lib/dodosuko-iotevents-stack";

const app = new cdk.App();
new DodosukoIoteventsStack(app, "DodosukoIoteventsStack", {});
