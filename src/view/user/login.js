/**
 * @description 用户登录页
 */
import { login } from '../../api/user';
import style from '../../style/user/login.module.scss';
import svgbg from '../../assets/image/svg/headBg.svg'
import logoImg from '../../assets/image/logo.png'
import { Input, Button } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'
import { useState } from 'react';
import { useHistory } from 'react-router-dom'
import { setStorage } from '../../utils/storage'
function Login() {
    const history = useHistory()
    let [username, setUsername] = useState()
    let [password, setPassword] = useState()
    async function useCommit() {
        const res = await login({
            shopAccountName: username,
            shopAccountPassword: password
        })
        if (res.status === 0) {
            setStorage('token', res.data.token)
            history.push('/campus')
        }

    }
    /**
     * @description 监听用户名,密码
     * @param {*} e 
     */
    function useUsername(e) {
        setUsername(e.target.value)
    }
    function usePassword(e) {
        setPassword(e.target.value)
    }
    return <div className={style.loginWrap}>
        <img className={style.svgbg} alt="React" src={svgbg} />
        <div className={style.lWrap}>
            <div className={style.title}>
                <img className={style.logo} src={logoImg} alt="" /><span>教育管理系统</span>
            </div>
            <div className={style.info}>四牧网络科技有限公司提供技术支持</div>
            <div className={style.smallTit}>账号密码登录</div>
            <div className={style.inpWrap}>
                <Input value={username} onChange={useUsername} className={style.username} placeholder="账号" prefix={<UserOutlined />} />
                <Input value={password} onChange={usePassword} placeholder="密码" prefix={<LockOutlined />} />
            </div>
            <Button onClick={useCommit} className={style.commitBtn} type="primary">提交</Button>
        </div>
    </div>
}
export default Login;