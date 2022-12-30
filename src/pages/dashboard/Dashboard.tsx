import { useTranslation } from "react-i18next"
import classNames from "classnames/bind"
import { useIsClassic } from "data/query"
import { Col, Page } from "components/layout"
import styles from "./Dashboard.module.scss"

const cx = classNames.bind(styles)

const Dashboard = () => {
  const { t } = useTranslation()
  const isClassic = useIsClassic()

  return (
    <Page title={t("Home")}>
      <Col>
      Placeholder for home.
      </Col>
    </Page>
  )
}

export default Dashboard
