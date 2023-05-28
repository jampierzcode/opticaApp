import React from "react";
import {
  Row,
  Col,
  Typography,
  Form,
  Input,
  Button,
  message,
  Modal,
  Space,
} from "antd";
import { API, Auth, graphqlOperation } from "aws-amplify";
import GROUPS from "../../constants/groups";
import * as mutations from "../../graphql/mutations";

const { Title } = Typography;
const { Item } = Form;

function Confirm({
  selectedRecord,
  group,
  isModalOpen,
  handleOk,
  handleCancel,
}) {
  const getMutation = () => {
    switch (group) {
      case GROUPS.GERENTE:
        return mutations.updateGERENTE;
      case GROUPS.VENDEDOR_MOSTRADOR:
        return mutations.updateVENDEDORES;
      case GROUPS.CLIENTES:
        return mutations.updateCLIENTES;
      default:
        return null;
    }
  };
  const onFinish = async (values) => {
    const { code } = values;
    if (!selectedRecord?.opticaID) {
      message.success("Gerente laboratory not found");
      handleOk();
    }
    try {
      try {
        await Auth.confirmSignUp(selectedRecord.userName, code, {
          clientMetadata: {
            groupName: group,
            laboratoryId: selectedRecord?.opticaID,
          },
        });
      } catch (error) {
        const code = error.code;
        if (code !== "NotAuthorizedException") {
          throw error;
        }
      }
      await API.graphql(
        graphqlOperation(getMutation(), {
          input: {
            id: selectedRecord.id,
            _version: selectedRecord._version,
            confirmed: true,
          },
          condition: {
            confirmed: { eq: false },
          },
        })
      );
      message.success("Confirmed successfully");
      handleOk();
    } catch (error) {
      message.error("Invalid code");
    }
  };

  const onFinishFailed = (errorInfo) => {
    console.log("Failed:", errorInfo);
  };

  const resendConfirmationCode = async () => {
    try {
      await Auth.resendSignUp(selectedRecord.userName);
      message.success("code resent successfully");
    } catch (err) {
      message.error("error resending code: ", err);
    }
  };
  return (
    <Modal
      title="Basic Modal"
      footer={null}
      open={isModalOpen}
      onOk={onFinish}
      onCancel={handleCancel}
    >
      <Row>
        <Col xs={24}>
          <Title level={4} style={{ textAlign: "center" }}>
            Confirm code for{" "}
            <em style={{ color: "GrayText" }}>{selectedRecord?.nombres}</em>
          </Title>
        </Col>
        <Col xs={24} sm={24} md={24} lg={24}>
          <Form
            name=""
            labelCol={{
              span: 10,
            }}
            wrapperCol={{
              span: 18,
            }}
            autoComplete="off"
            onFinish={onFinish}
            onFinishFailed={onFinishFailed}
          >
            <Item
              label="Code"
              name="code"
              rules={[
                {
                  required: true,
                  message: "Por favor ingresa el code",
                },
              ]}
            >
              <Input />
            </Item>

            <Space style={{ justifyContent: "center", width: "100%" }} wrap>
              <Button
                onClick={resendConfirmationCode}
                type="default"
                htmlType="button"
              >
                Resend Code
              </Button>
              <Button type="primary" htmlType="submit">
                Submit
              </Button>
            </Space>
          </Form>
        </Col>
      </Row>
    </Modal>
  );
}

export default Confirm;
