
module.exports = [{
  tokens: {
    admin: {
      token: 'admin-token'
    },
    editor: {
      token: 'editor-token'
    }
  }
},
{
  users: {
    'admin-token': {
      introduction: 'I am a super administrator',
      avatar: 'https://ss1.bdstatic.com/70cFvXSh_Q1YnxGkpoWK1HF6hhy/it/u=1126310970,2752889083&fm=26&gp=0.jpg',
      name: 'Super Admin'
    },
    'editor-token': {
      introduction: 'I am an editor',
      avatar: 'https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif',
      name: 'Normal Editor'
    }
  }
}
]
