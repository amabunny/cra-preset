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
        title: 'TypeScript',
        image: SergeiModel.getSkillImage('ts')
      },
      {
        key: 'js',
        title: 'JavaScript',
        image: SergeiModel.getSkillImage('js')
      },
      {
        key: 'dp',
        title: 'Design Patterns',
        image: SergeiModel.getSkillImage('dp')
      },
      {
        key: 'vcs',
        title: 'Versioning Control Systems',
        image: SergeiModel.getSkillImage('git')
      },
      {
        key: 'safari',
        title: 'Safari Jedi',
        image: SergeiModel.getSkillImage('safari')
      },
      {
        key: 'deploy',
        title: 'CI/CD knowledge',
        image: SergeiModel.getSkillImage('deploy')
      },
      {
        key: 'react',
        title: 'React.JS',
        image: SergeiModel.getSkillImage('react')
      },
      {
        key: 'vue',
        title: 'Vue.JS',
        image: SergeiModel.getSkillImage('vue')
      }
    ]
  }

  static getSkillImage (skill: Skills) {
    return `${SergeiModel.path}/skills/${skill}.png`
  }
}
