export class SergeiModel {
  static path = 'sergei'

  static get avatarUrl () {
    return `${SergeiModel.path}/bbavatar.jpg`
  }

  static get nickname () {
    return '@amabunny'
  }

  static get skills (): ISkill[] {
    return [
      {
        key: 'ts',
        image: SergeiModel.getSkillImage('ts')
      },
      {
        key: 'js',
        image: SergeiModel.getSkillImage('js')
      },
      {
        key: 'dp',
        image: SergeiModel.getSkillImage('dp')
      },
      {
        key: 'vcs',
        image: SergeiModel.getSkillImage('git')
      },
      {
        key: 'safari',
        image: SergeiModel.getSkillImage('safari')
      },
      {
        key: 'deploy',
        image: SergeiModel.getSkillImage('deploy')
      },
      {
        key: 'react',
        image: SergeiModel.getSkillImage('react')
      },
      {
        key: 'vue',
        image: SergeiModel.getSkillImage('vue')
      },
      {
        key: 'markup',
        image: SergeiModel.getSkillImage('markup')
      }
    ]
  }

  static getSkillImage (skill: Skills) {
    return `${SergeiModel.path}/skills/${skill}.png`
  }
}
