/**
 * 角色
 * Created by Administrator on 2017/8/9.
 */

import {user} from '../utils/cache'

/*
ROLE_ADMIN	超级管理员
ROLE_SYS_ADMIN	系统管理员
ROLE_BANK_BOSS	分行行长
ROLE_BANK_ADMIN	分行管理员
ROLE_BANK_SUB_BOSS	支行行长
ROLE_BANK_EMPLOYEE	信贷经理
ROLE_ORG_BOSS	小贷机构Boss
ROLE_ORG_ADMIN	小贷机构管理员
ROLE_ORG_EMPLOYEE	小贷机构业务员
ROLE_ORG_HELP_BOSS	助贷机构Boss
ROLE_ORG_HELP_ADMIN	助贷机构管理员
ROLE_ORG_HELP_EMPLOYEE	助贷机构业务员
ROLE_USER	用户
*/
const userRoles = Object.freeze({
  // ROLE_ADMIN	超级管理员
  admin: 'ROLE_ADMIN',
  // ROLE_SYS_ADMIN	系统管理员
  sys_admin: 'ROLE_SYS_ADMIN',
  // ROLE_BANK_BOSS	分行行长
  bank_boss: 'ROLE_BANK_BOSS',
  // ROLE_BANK_ADMIN	分行管理员
  bank_admin: 'ROLE_BANK_ADMIN',
  // ROLE_BANK_SUB_BOSS	支行行长
  bank_sub_boss: 'ROLE_BANK_SUB_BOSS',
  // ROLE_BANK_EMPLOYEE	信贷经理
  bank_employee: 'ROLE_BANK_EMPLOYEE',
  // ROLE_ORG_BOSS	小贷机构Boss
  org_boss: 'ROLE_ORG_BOSS',
  // ROLE_ORG_ADMIN	小贷机构管理员
  org_admin: 'ROLE_ORG_ADMIN',
  // ROLE_ORG_EMPLOYEE	小贷机构业务员
  org_employee: 'ROLE_ORG_EMPLOYEE',
  // ROLE_ORG_HELP_BOSS	助贷机构Boss
  org_help_boss: 'ROLE_ORG_HELP_BOSS',
  // ROLE_ORG_HELP_ADMIN	助贷机构管理员
  org_help_admin: 'ROLE_ORG_HELP_ADMIN',
  // ROLE_ORG_HELP_EMPLOYEE	助贷机构业务员
  org_help_employee: 'ROLE_ORG_HELP_EMPLOYEE',
  // ROLE_USER	用户
  user: 'ROLE_USER'
});
/**
 * 根据登录用户权限通道获取可选的角色列表
 * @returns {Object}
 */
const getRoleList = () => {
  let arrs = [];
  switch (user.target()) {
    case userRoles.org_help_admin:
      arrs.push({name: '网点业务员', value: userRoles.org_help_employee});
      break;
    case userRoles.org_admin:
      arrs.push({name: '网点业务员', value: userRoles.org_employee});
      break;
    case userRoles.bank_admin:
      arrs.push({name: '支行行长', value: userRoles.bank_sub_boss});
      arrs.push({name: '信贷经理', value: userRoles.bank_employee});
      break;
    case userRoles.admin:
    case userRoles.sys_admin:
      arrs.push({name: '系统管理员', value: userRoles.sys_admin});
      arrs.push({name: '分行行长', value: userRoles.bank_boss});
      arrs.push({name: '分行管理员', value: userRoles.bank_admin});
      arrs.push({name: '小贷机构BOSS', value: userRoles.org_boss});
      arrs.push({name: '小贷机构管理员', value: userRoles.org_admin});
      arrs.push({name: '助贷机构BOSS', value: userRoles.org_help_boss});
      arrs.push({name: '助贷机构管理员', value: userRoles.org_help_admin});
      break;
  }
  return Object.freeze(arrs);
};



function indexOf(targetEle, searchEle) {
  let idx = -1;
  for (let i = 0; i < targetEle.length; i++) {
    if (targetEle[i].target === searchEle.target && targetEle[i].value === searchEle.value) {
      idx = i
      break;
    }
  }
  return idx;
}

export {
  userRoles as default,
  getRoleList
};
