import { Form, Select } from "antd";
import GROUPS from "../../constants/groups";
const { Option } = Select;
function LaboratorioSelector({ groupName, setOpticaID, opticas, opticaID }) {
  console.log(opticaID);
  return groupName === GROUPS.SUPER_ADMIN ? (
    <Form.Item
      label="Optica"
      rules={[{ required: true, message: "Este campo es requerido" }]}
    >
      <Select
        value={opticaID !== null ? opticaID : null}
        onSelect={(e) => setOpticaID(e)}
        placeholder="Select una Optica"
      >
        {opticas.map((optica) => {
          return (
            <Option key={optica.id} value={optica.id}>
              {optica.nombre}
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  ) : (
    <></>
  );
}

export default LaboratorioSelector;
