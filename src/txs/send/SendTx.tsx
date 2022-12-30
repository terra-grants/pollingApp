import { useTranslation } from "react-i18next"
import { useSearchParams } from "react-router-dom"
import { useTokenBalance } from "data/queries/wasm"
import { useTokenItem } from "data/token"
import { Page } from "components/layout"

const SendTx = () => {
  const { t } = useTranslation()

  const [searchParams] = useSearchParams()
  const token = searchParams.get("token")

  if (!token) throw new Error("Token is not defined")

  const { data: cw20Balance, ...state } = useTokenBalance(token)
  const tokenItem = useTokenItem(token)

  const symbol = tokenItem?.symbol ?? ""

  return (
    <Page {...state} title={t("Send {{symbol}}", { symbol })}>
    </Page>
  )
}

export default SendTx
