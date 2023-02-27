import { useIntl } from "react-intl"
import { Messages } from "../i18n";

export const useT = () => {
  const { formatMessage } = useIntl();

  const getMessage = (message: Messages) => {
    return formatMessage({ id: message })
  }

  return {
    getMessage
  }
}