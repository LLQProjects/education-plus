/**
 * @description 用户登录页
 */
import '../../api/user';
import style from '../../style/user/login.module.scss';
import svgbg from '../../assets/image/svg/headBg.svg'
import logoImg from '../../assets/image/logo.png'
import { Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
function Login() {
    return <div className={style.loginWrap}>
        <img className={style.svgbg} alt="React" src={svgbg} />
        <div className={style.lWrap}>
            <div className={style.title}>
                <img className={style.logo} src={logoImg} alt="" /><span>教育管理系统</span>
            </div>
            <div className={style.info}>四牧网络科技有限公司提供技术支持</div>
            <div className={style.smallTit}>账号密码登录</div>
            <div className={style.inpWrap}>
                <Input className={style.username} placeholder="账号" prefix={<UserOutlined />} />
                <Input placeholder="密码" prefix={<LockOutlined />} />
            </div>
            <Button className={style.commitBtn} type="primary">提交</Button>
        </div>
    </div>
}
export default Login;