
type TStudentList = {
    [id: number]: TStudentInfo;
}

type TStudentInfo = {
    name: string;
    sex: number; // 0: famale,  1: male
    seat: [number, number];  // [x, y] x排 y列
}

class Student {
    name: string;
    sex: number;
    seat: [number, number]
    constructor(name: string, sex: number, seat: [number, number]) {
        this.name = name;
        this.sex = sex;
        this.seat = seat;
    }
}


export const studentList: TStudentList = {
    1: {
        name: '顾思雯',
        sex: 0,
        seat: [6, 7]
    },
    2: {
        name: '马海秦',
        sex: 1,
        seat: [6, 6]
    },
    3: {
        name: '易浩轩',
        sex: 1,
        seat: [6, 5]
    },
    4: {
        name: '周祎楠',
        sex: 1,
        seat: [6, 4]
    },
    5: {
        name: '董子为',
        sex: 1,
        seat: [6, 3]
    },
    6: {
        name: '刘子曼',
        sex: 0,
        seat: [6, 2]
    },
    7: {
        name: '王梓轩',
        sex: 1,
        seat: [6, 1]
    },
    8: {
        name: '任璇清',
        sex: 0,
        seat: [5, 7]
    },
    9: {
        name: '李恩源',
        sex: 1,
        seat: [5, 6]
    },
    10: {
        name: '王梓涵',
        sex: 1,
        seat: [5, 5]
    },
    11: {
        name: '李星雨',
        sex: 1,
        seat: [5, 4]
    },
    12: {
        name: '邹昊辰',
        sex: 1,
        seat: [5, 3]
    },
    13: {
        name: '谭奕卓',
        sex: 0,
        seat: [5, 2]
    },
    14: {
        name: '刘九仪',
        sex: 1,
        seat: [5, 1]
    },
    15: {
        name: '陈奕熙',
        sex: 0,
        seat: [4, 7]
    },
    16: {
        name: '蒋宇轩',
        sex: 1,
        seat: [4, 6]
    },
    17: {
        name: '黄子乐',
        sex: 1,
        seat: [4, 5]
    },
    18: {
        name: '罗予和',
        sex: 1,
        seat: [4, 4]
    },
    19: {
        name: '吕奕臻',
        sex: 1,
        seat: [4, 3]
    },
    20: {
        name: '吕咏卓',
        sex: 0,
        seat: [4, 2]
    },
    21: {
        name: '杨瀚霖',
        sex: 1,
        seat: [4, 1]
    },
    22: {
        name: '高恺柠',
        sex: 0,
        seat: [3, 7]
    },
    23: {
        name: '孟祥元',
        sex: 1,
        seat: [3, 6]
    },
    24: {
        name: '丘倩诗',
        sex: 1,
        seat: [3, 5]
    },
    25: {
        name: '付宇莹',
        sex: 1,
        seat: [3, 4]
    },
    26: {
        name: '侯苇杭',
        sex: 1,
        seat: [3, 3]
    },
    27: {
        name: '王媛玥',
        sex: 0,
        seat: [3, 2]
    },
    28: {
        name: '曹子恒',
        sex: 1,
        seat: [3, 1]
    },
    29: {
        name: '张珂嘉',
        sex: 1,
        seat: [2, 7]
    },
    30: {
        name: '丘圣祺',
        sex: 0,
        seat: [2, 6]
    },
    31: {
        name: '封金秀',
        sex: 1,
        seat: [2, 5]
    },
    32: {
        name: '倪睿杰',
        sex: 1,
        seat: [2, 4]
    },
    33: {
        name: '李宗林',
        sex: 1,
        seat: [2, 3]
    },
    34: {
        name: '李泓萱',
        sex: 1,
        seat: [2, 2]
    },
    35: {
        name: '张洪',
        sex: 0,
        seat: [2, 1]
    },
    36: {
        name: '潘芷逸',
        sex: 0,
        seat: [1, 7]
    },
    37: {
        name: '岳政宇',
        sex: 1,
        seat: [1, 6]
    },
    38: {
        name: '刘明翰',
        sex: 1,
        seat: [1, 5]
    },
    39: {
        name: '朱派兴',
        sex: 1,
        seat: [1, 4]
    },
    40: {
        name: '张玉璞',
        sex: 1,
        seat: [1, 3]
    },
    41: {
        name: '褚媛钧',
        sex: 0,
        seat: [1, 2]
    }
}