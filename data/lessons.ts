
import { Lesson, GameType, QuestionType } from '../types';

export const LESSONS: Lesson[] = [
  {
    id: 'bai-33',
    title: 'Bài 33: Gene là trung tâm của di truyền học',
    description: 'Tìm hiểu về DNA, Gene và Mã di truyền - nền tảng của sự sống.',
    parts: [
      {
        id: '33-1',
        title: 'I. Gene và cấu trúc của DNA',
        description: 'Khám phá đơn vị lưu trữ thông tin di truyền.',
        game: {
          type: GameType.MATCHING,
          data: [
            { id: '1', left: 'Nucleotide A', right: 'Bổ sung với T' },
            { id: '2', left: 'Nucleotide G', right: 'Bổ sung với C' },
            { id: '3', left: 'DNA', right: 'Acid Deoxyribonucleic' },
            { id: '4', left: 'Gene', right: 'Đoạn DNA mang thông tin' }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'DNA cấu tạo từ mấy loại nucleotide?', options: ['2', '3', '4', '5'], correctIndex: 2, explanation: 'DNA gồm A, T, G, C.' },
          { type: QuestionType.TRUE_FALSE, question: 'A liên kết với G theo nguyên tắc bổ sung.', isTrue: false, explanation: 'A liên kết với T.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Tên loại đường trong DNA là gì?', correctAnswer: 'deoxyribose', explanation: 'Đường deoxyribose (5C).' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Gene là một đoạn của phân tử nào?', options: ['Protein', 'Lipid', 'DNA', 'Tinh bột'], correctIndex: 2, explanation: 'Gene nằm trên DNA.' },
          { type: QuestionType.TRUE_FALSE, question: 'DNA có cấu trúc xoắn kép.', isTrue: true, explanation: 'Do Watson và Crick phát hiện.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Khoảng cách giữa 2 cặp base là bao nhiêu nm?', options: ['0.34', '3.4', '34', '340'], correctIndex: 0, explanation: 'Chu kỳ xoắn là 3.4nm gồm 10 cặp.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Đơn phân của DNA gọi là gì?', correctAnswer: 'nucleotide', explanation: 'Gồm đường, base và phosphate.' },
          { type: QuestionType.TRUE_FALSE, question: 'Số lượng A luôn bằng T.', isTrue: true, explanation: 'Theo nguyên tắc bổ sung.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Liên kết nối các Nu trên 1 mạch là:', options: ['Hydrogen', 'Peptide', 'Phosphate-đường', 'Ion'], correctIndex: 2, explanation: 'Liên kết cộng hóa trị.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Số liên kết H giữa G và C là mấy?', correctAnswer: '3', explanation: 'G-C có 3 liên kết, A-T có 2.' }
        ]
      },
      {
        id: '33-2',
        title: 'II. RNA và các loại RNA',
        description: 'Cấu trúc và chức năng của các loại RNA.',
        game: {
          type: GameType.MATCHING,
          data: [
            { id: '1', left: 'mRNA', right: 'RNA thông tin' },
            { id: '2', left: 'tRNA', right: 'RNA vận chuyển' },
            { id: '3', left: 'rRNA', right: 'RNA ribosome' },
            { id: '4', left: 'Uracil', right: 'Base đặc trưng của RNA' }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'RNA thường có mấy mạch?', options: ['1', '2', '3', '4'], correctIndex: 0, explanation: 'RNA thường là mạch đơn.' },
          { type: QuestionType.TRUE_FALSE, question: 'RNA chứa đường Deoxyribose.', isTrue: false, explanation: 'RNA chứa đường Ribose.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Base nào thay thế T trong RNA?', correctAnswer: 'uracil', explanation: 'RNA dùng U thay cho T.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Loại RNA nào mang amino acid đến ribosome?', options: ['mRNA', 'tRNA', 'rRNA', 'miRNA'], correctIndex: 1, explanation: 'tRNA có đối mã khớp với mRNA.' },
          { type: QuestionType.TRUE_FALSE, question: 'mRNA được dùng làm khuôn dịch mã.', isTrue: true, explanation: 'Mang thông tin từ nhân ra tế bào chất.' },
          { type: QuestionType.SHORT_ANSWER, question: 'rRNA kết hợp với protein tạo nên bào quan gì?', correctAnswer: 'ribosome', explanation: 'Nơi tổng hợp protein.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Số lượng Nu của RNA so với DNA thường là:', options: ['Nhiều hơn', 'Ít hơn nhiều', 'Bằng nhau', 'Gấp đôi'], correctIndex: 1, explanation: 'RNA chỉ sao chép 1 đoạn gene.' },
          { type: QuestionType.TRUE_FALSE, question: 'tRNA có cấu trúc thùy tròn đặc trưng.', isTrue: true, explanation: 'Để thực hiện chức năng vận chuyển.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Liên kết trong RNA chủ yếu là:', options: ['Phosphate-đường', 'Hydrogen', 'Cả A và B', 'Peptide'], correctIndex: 0, explanation: 'Do mạch đơn nên ít liên kết H.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Viết tắt của RNA vận chuyển là gì?', correctAnswer: 'trna', explanation: 'Transfer RNA.' }
        ]
      },
      {
        id: '33-3',
        title: 'III. Mã di truyền',
        description: 'Giải mã ngôn ngữ của sự sống.',
        game: {
          type: GameType.SEQUENCING,
          data: [
            { id: '1', text: 'Gene chứa thông tin.', order: 1 },
            { id: '2', text: 'Mã bộ ba trên mRNA.', order: 2 },
            { id: '3', text: 'Dịch mã ra amino acid.', order: 3 },
            { id: '4', text: 'Chuỗi protein hoàn thiện.', order: 4 }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Mã di truyền là mã bộ mấy?', options: ['1', '2', '3', '4'], correctIndex: 2, explanation: 'Mã bộ ba (codon).' },
          { type: QuestionType.TRUE_FALSE, question: 'Một bộ ba mã hóa cho nhiều amino acid.', isTrue: false, explanation: 'Mã di truyền có tính đặc hiệu.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Mã mở đầu phổ biến nhất là gì?', correctAnswer: 'aug', explanation: 'AUG mã hóa cho Methionine.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Có bao nhiêu bộ ba kết thúc?', options: ['1', '2', '3', '4'], correctIndex: 2, explanation: 'UAA, UAG, UGA.' },
          { type: QuestionType.TRUE_FALSE, question: 'Mã di truyền có tính thoái hóa.', isTrue: true, explanation: 'Nhiều bộ ba cùng mã hóa 1 amino acid.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Tính phổ biến nghĩa là gì?', correctAnswer: 'chung cho mọi loài', explanation: 'Sử dụng chung bảng mã di truyền.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Có tổng cộng bao nhiêu codon?', options: ['20', '61', '64', '16'], correctIndex: 2, explanation: '4^3 = 64 bộ ba.' },
          { type: QuestionType.TRUE_FALSE, question: 'Codon nằm trên phân tử tRNA.', isTrue: false, explanation: 'Codon trên mRNA, anticodon trên tRNA.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Đặc điểm "đọc liên tục không gối" là của:', options: ['Mã di truyền', 'Protein', 'Carbohydrate', 'DNA'], correctIndex: 0, explanation: 'Đọc theo từng bộ ba kế tiếp.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Số bộ ba mã hóa cho amino acid là mấy?', correctAnswer: '61', explanation: '64 tổng - 3 kết thúc = 61.' }
        ]
      }
    ]
  },
  {
    id: 'bai-34',
    title: 'Bài 34: Từ gene đến tính trạng',
    description: 'Quá trình hiện thực hóa thông tin di truyền.',
    parts: [
      {
        id: '34-1',
        title: 'I. Phiên mã',
        description: 'Tạo ra bản sao mRNA từ DNA.',
        game: {
          type: GameType.SEQUENCING,
          data: [
            { id: '1', text: 'Enzyme tháo xoắn gene.', order: 1 },
            { id: '2', text: 'Gắn Nu tự do vào mạch khuôn.', order: 2 },
            { id: '3', text: 'Tạo mạch RNA hoàn chỉnh.', order: 3 },
            { id: '4', text: 'RNA rời nhân ra tế bào chất.', order: 4 }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Phiên mã diễn ra ở đâu?', options: ['Nhân', 'Ribosome', 'Màng', 'Ti thể'], correctIndex: 0, explanation: 'Nơi chứa DNA.' },
          { type: QuestionType.TRUE_FALSE, question: 'Phiên mã dùng enzyme DNA Polymerase.', isTrue: false, explanation: 'Dùng RNA Polymerase.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Mạch nào của DNA dùng làm khuôn?', correctAnswer: 'mạch gốc', explanation: 'Chiều 3\'-5\'.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Nguyên tắc bổ sung trong phiên mã là:', options: ['A-T, G-C', 'A-U, G-C', 'A-A, G-G', 'T-U, G-C'], correctIndex: 1, explanation: 'DNA mạch khuôn liên kết với Nu tự do.' },
          { type: QuestionType.TRUE_FALSE, question: 'Kết quả phiên mã tạo ra Protein.', isTrue: false, explanation: 'Tạo ra RNA.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Nếu mạch gốc là AAA thì mRNA là gì?', correctAnswer: 'uuu', explanation: 'A bổ sung với U.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Sản phẩm phiên mã đi đâu sau đó?', options: ['Vào nhân', 'Ra ribosome', 'Bị hủy', 'Vào lục lạp'], correctIndex: 1, explanation: 'Để chuẩn bị dịch mã.' },
          { type: QuestionType.TRUE_FALSE, question: 'Gene có thể phiên mã nhiều lần.', isTrue: true, explanation: 'Tạo nhiều bản sao mRNA.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Mạch RNA được tổng hợp theo chiều nào?', options: ['3\'-5\'', '5\'-3\'', 'Ngẫu nhiên', 'Hai chiều'], correctIndex: 1, explanation: 'Enzyme chỉ chạy 1 chiều.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Quá trình tổng hợp RNA gọi là gì?', correctAnswer: 'phiên mã', explanation: 'Transcription.' }
        ]
      },
      {
        id: '34-2',
        title: 'II. Dịch mã',
        description: 'Tổng hợp Protein từ mRNA.',
        game: {
          type: GameType.MATCHING,
          data: [
            { id: '1', left: 'Anticodon', right: 'Bộ ba đối mã trên tRNA' },
            { id: '2', left: 'Codon', right: 'Bộ ba mã hóa trên mRNA' },
            { id: '3', left: 'Peptide', right: 'Liên kết giữa các amino acid' },
            { id: '4', left: 'Amino acid', right: 'Đơn phân của Protein' }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Dịch mã diễn ra ở đâu?', options: ['Nhân', 'Ribosome', 'Lưới nội chất', 'Không bào'], correctIndex: 1, explanation: 'Nhà máy tổng hợp protein.' },
          { type: QuestionType.TRUE_FALSE, question: 'Dịch mã cần năng lượng ATP.', isTrue: true, explanation: 'Mọi hoạt động sống đều cần.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Loại RNA nào mang amino acid?', correctAnswer: 'trna', explanation: 'Vận chuyển chuyên biệt.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Quá trình dừng lại khi gặp:', options: ['Mã mở đầu', 'Mã kết thúc', 'Gặp DNA', 'Hết nước'], correctIndex: 1, explanation: 'UAA, UAG, UGA.' },
          { type: QuestionType.TRUE_FALSE, question: 'Nhiều ribosome cùng trượt trên 1 mRNA gọi là Polysome.', isTrue: true, explanation: 'Giúp tăng hiệu suất.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Sản phẩm của dịch mã là gì?', correctAnswer: 'chuỗi polypeptide', explanation: 'Hoặc Protein.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Nguyên tắc bổ sung trong dịch mã giữa:', options: ['DNA và RNA', 'Mạch gốc và bổ sung', 'Codon và Anticodon', 'Amino acid'], correctIndex: 2, explanation: 'Giúp khớp mã chính xác.' },
          { type: QuestionType.TRUE_FALSE, question: 'tRNA rời đi sau khi để lại amino acid.', isTrue: true, explanation: 'Nó sẽ đi lấy amino acid khác.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Số lượng Nu của mRNA so với số amino acid là:', options: ['Gấp 3', 'Gấp đôi', 'Bằng nhau', 'Gấp 4'], correctIndex: 0, explanation: 'Vì mã bộ ba.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Liên kết giữa các đơn phân Protein?', correctAnswer: 'peptide', explanation: 'Nối các gốc -NH2 và -COOH.' }
        ]
      },
      {
        id: '34-3',
        title: 'III. Mối quan hệ Gene - Tính trạng',
        description: 'Dòng thông tin di truyền: DNA -> RNA -> Protein -> Tính trạng.',
        game: {
          type: GameType.SCENARIO,
          data: {
            title: 'Hành trình thông tin',
            description: 'Thông tin di truyền được lưu trữ an toàn trong nhân (DNA).',
            question: 'Bước nào giúp "mở khóa" thông tin để tạo đặc điểm cơ thể?',
            choices: [
              { id: '1', text: 'Nhân đôi DNA', isCorrect: false, feedback: 'Chỉ giúp truyền lại cho đời sau.' },
              { id: '2', text: 'Phiên mã và Dịch mã', isCorrect: true, feedback: 'Đúng! Tạo ra Protein quyết định tính trạng.' },
              { id: '3', text: 'Tiêu hóa thức ăn', isCorrect: false, feedback: 'Không liên quan trực tiếp.' }
            ]
          }
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Tính trạng được biểu hiện nhờ chất nào?', options: ['DNA', 'RNA', 'Protein', 'Hormone'], correctIndex: 2, explanation: 'Protein thực hiện chức năng tế bào.' },
          { type: QuestionType.TRUE_FALSE, question: 'Gene quy định trực tiếp tính trạng.', isTrue: false, explanation: 'Quy định gián tiếp qua trung gian RNA và Protein.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Sơ đồ đúng là: DNA -> ... -> Protein -> Tính trạng.', correctAnswer: 'rna', explanation: 'Mô hình trung tâm di truyền học.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Biến đổi trên gene dẫn đến:', options: ['Thay đổi RNA', 'Thay đổi Protein', 'Thay đổi tính trạng', 'Tất cả ý trên'], correctIndex: 3, explanation: 'Dây chuyền ảnh hưởng.' },
          { type: QuestionType.TRUE_FALSE, question: 'Môi trường không ảnh hưởng đến tính trạng.', isTrue: false, explanation: 'Tính trạng = Kiểu gen + Môi trường.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Đơn vị chức năng biểu hiện đặc điểm?', correctAnswer: 'protein', explanation: 'Cấu trúc và enzyme.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Bản sao tạm thời của gene là:', options: ['mRNA', 'tRNA', 'rRNA', 'DNA'], correctIndex: 0, explanation: 'Dễ dàng bị phân hủy sau khi dùng.' },
          { type: QuestionType.TRUE_FALSE, question: 'Thông tin chảy theo một chiều từ DNA đến Tính trạng.', isTrue: true, explanation: 'Theo học thuyết trung tâm.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Tính trạng là gì?', options: ['Đặc điểm cơ thể', 'Đoạn DNA', 'Một loại đường', 'Một loại base'], correctIndex: 0, explanation: 'Hình thái, sinh lý, hóa sinh.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Ai quy định cấu trúc Protein?', correctAnswer: 'gene', explanation: 'Trình tự Nu quy định trình tự Amino acid.' }
        ]
      }
    ]
  },
  {
    id: 'bai-35',
    title: 'Bài 35: Nhiễm sắc thể và bộ nhiễm sắc thể',
    description: 'Tìm hiểu về vật chất di truyền ở cấp độ tế bào.',
    parts: [
      {
        id: '35-1',
        title: 'I. Cấu trúc Nhiễm sắc thể (NST)',
        description: 'Quan sát cấu trúc hiển vi của NST.',
        game: {
          type: GameType.MATCHING,
          data: [
            { id: '1', left: 'Nucleosome', right: '8 protein Histone + DNA' },
            { id: '2', left: 'Tâm động', right: 'Điểm thắt đính thoi phân bào' },
            { id: '3', left: 'Chromatid', right: 'Nhiễm sắc tử chị em' },
            { id: '4', left: 'Histone', right: 'Protein cấu tạo nên NST' }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'NST quan sát rõ nhất ở kỳ nào?', options: ['Kỳ đầu', 'Kỳ giữa', 'Kỳ sau', 'Kỳ cuối'], correctIndex: 1, explanation: 'Vì co xoắn cực đại.' },
          { type: QuestionType.TRUE_FALSE, question: 'NST chỉ có ở sinh vật nhân thực.', isTrue: true, explanation: 'Nhân sơ chỉ có DNA vòng.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Đường kính sợi cơ bản là bao nhiêu nm?', correctAnswer: '11', explanation: 'Mức xoắn 1.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Thành phần hóa học của NST?', options: ['DNA + Histone', 'RNA + Histone', 'DNA + Lipid', 'DNA + Polysaccharide'], correctIndex: 0, explanation: 'Chủ yếu là DNA và protein.' },
          { type: QuestionType.TRUE_FALSE, question: 'NST kép gồm 2 chromatid dính nhau ở tâm động.', isTrue: true, explanation: 'Xuất hiện sau kỳ trung gian.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Mức xoắn 2 gọi là gì?', correctAnswer: 'sợi nhiễm sắc', explanation: 'Đường kính 30nm.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Mỗi loài có bộ NST đặc trưng về:', options: ['Số lượng', 'Hình dạng', 'Cấu trúc', 'Tất cả ý trên'], correctIndex: 3, explanation: 'Tính đặc hữu của loài.' },
          { type: QuestionType.TRUE_FALSE, question: 'Số lượng NST tỉ lệ với mức độ tiến hóa.', isTrue: false, explanation: 'Không có mối liên hệ.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Chức năng chính của NST?', options: ['Lưu trữ thông tin', 'Bảo quản thông tin', 'Truyền đạt thông tin', 'Tất cả ý trên'], correctIndex: 3, explanation: 'Đơn vị di truyền tế bào.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Điểm đầu mút có tác dụng gì?', correctAnswer: 'bảo vệ', explanation: 'Ngăn dính các NST.' }
        ]
      },
      {
        id: '35-2',
        title: 'II. Bộ nhiễm sắc thể lưỡng bội (2n)',
        description: 'Đặc trưng số lượng NST ở các loài.',
        game: {
          type: GameType.SCENARIO,
          data: {
            title: 'Phòng thí nghiệm di truyền',
            description: 'Bạn đang quan sát tế bào người dưới kính hiển vi.',
            question: 'Số lượng NST bạn kỳ vọng thấy trong tế bào da là bao nhiêu?',
            choices: [
              { id: '1', text: '23 chiếc', isCorrect: false, feedback: 'Sai, đó là tế bào giao tử.' },
              { id: '2', text: '46 chiếc', isCorrect: true, feedback: 'Đúng! Tế bào sinh dưỡng người có 2n = 46.' },
              { id: '3', text: '92 chiếc', isCorrect: false, feedback: 'Quá nhiều!' }
            ]
          }
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Bộ NST đơn bội (n) ở người là bao nhiêu?', options: ['46', '23', '92', '12'], correctIndex: 1, explanation: 'Giao tử người.' },
          { type: QuestionType.TRUE_FALSE, question: 'Tế bào sinh dưỡng chứa bộ NST lưỡng bội.', isTrue: true, explanation: 'Gồm các cặp tương đồng.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Ký hiệu bộ NST của ruồi giấm?', correctAnswer: '2n=8', explanation: 'Gồm 4 cặp.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Cặp NST tương đồng là cặp có:', options: ['Cùng hình dạng', 'Cùng kích thước', 'Nguồn gốc bố-mẹ', 'Tất cả ý trên'], correctIndex: 3, explanation: 'Định nghĩa cặp tương đồng.' },
          { type: QuestionType.TRUE_FALSE, question: 'Bộ NST của tinh trùng là 2n.', isTrue: false, explanation: 'Là đơn bội n.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Bộ NST gà là bao nhiêu?', correctAnswer: '2n=78', explanation: 'Khá nhiều so với người.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Cặp NST giới tính ở nam giới?', options: ['XX', 'XY', 'XO', 'ZZ'], correctIndex: 1, explanation: 'Quyết định giới tính nam.' },
          { type: QuestionType.TRUE_FALSE, question: 'Đậu Hà Lan có 2n = 14.', isTrue: true, explanation: 'Đối tượng của Mendel.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Trong 1 cặp tương đồng, 1 chiếc từ bố, 1 chiếc từ:', options: ['Anh', 'Chị', 'Mẹ', 'Em'], correctIndex: 2, explanation: 'Nhận qua thụ tinh.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Cơ thể có bộ NST dư 1 chiếc (2n+1) gọi là gì?', correctAnswer: 'thể ba', explanation: 'Ví dụ: Hội chứng Down.' }
        ]
      },
      {
        id: '35-3',
        title: 'III. Cặp NST giới tính',
        description: 'Sự khác biệt giữa nam và nữ.',
        game: {
          type: GameType.MATCHING,
          data: [
            { id: '1', left: 'Người nam', right: 'XY' },
            { id: '2', left: 'Người nữ', right: 'XX' },
            { id: '3', left: 'Giao tử X', right: 'Xác định giới tính nữ' },
            { id: '4', left: 'Giao tử Y', right: 'Xác định giới tính nam' }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Số lượng cặp NST giới tính trong tế bào người?', options: ['1', '2', '22', '23'], correctIndex: 0, explanation: 'Chỉ có 1 cặp (cặp số 23).' },
          { type: QuestionType.TRUE_FALSE, question: 'NST X lớn hơn NST Y.', isTrue: true, explanation: 'X mang nhiều gene hơn.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Ở châu chấu đực, bộ NST giới tính là gì?', correctAnswer: 'xo', explanation: 'Chỉ có 1 chiếc X.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Ai quyết định giới tính ở người?', options: ['Bố', 'Mẹ', 'Bà', 'Ông'], correctIndex: 0, explanation: 'Do tinh trùng mang X hoặc Y.' },
          { type: QuestionType.TRUE_FALSE, question: 'Giao tử ở người luôn mang 23 NST.', isTrue: true, explanation: 'Bộ đơn bội.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Ký hiệu cặp giới tính chim mái?', correctAnswer: 'xy', explanation: 'Ngược với người (hoặc ZW).' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Tế bào trứng ở người mang NST giới tính nào?', options: ['Luôn là X', 'Luôn là Y', 'Có X hoặc Y', 'Không mang'], correctIndex: 0, explanation: 'Phụ nữ là XX nên chỉ cho trứng X.' },
          { type: QuestionType.TRUE_FALSE, question: 'NST giới tính chỉ chứa gene quy định giới tính.', isTrue: false, explanation: 'Chứa cả gene quy định tính trạng thường.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Tỉ lệ nam:nữ sơ sinh xấp xỉ:', options: ['1:1', '2:1', '1:2', '3:1'], correctIndex: 0, explanation: 'Do tỉ lệ tinh trùng X và Y ngang nhau.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Bệnh máu khó đông do gene trên NST nào?', correctAnswer: 'x', explanation: 'Liên kết giới tính.' }
        ]
      }
    ]
  },
  {
    id: 'bai-36',
    title: 'Bài 36: Nguyên phân và giảm phân',
    description: 'Cơ chế phân chia tế bào và duy trì bộ NST.',
    parts: [
      {
        id: '36-1',
        title: 'I. Nguyên phân',
        description: 'Tạo ra tế bào con giống hệt tế bào mẹ.',
        game: {
          type: GameType.SEQUENCING,
          data: [
            { id: '1', text: 'Kỳ đầu: NST co xoắn.', order: 1 },
            { id: '2', text: 'Kỳ giữa: Xếp 1 hàng.', order: 2 },
            { id: '3', text: 'Kỳ sau: Tách chromatid.', order: 3 },
            { id: '4', text: 'Kỳ cuối: Chia tế bào chất.', order: 4 }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Kết quả của nguyên phân từ 1 tế bào 2n?', options: ['2 tế bào n', '2 tế bào 2n', '4 tế bào n', '4 tế bào 2n'], correctIndex: 1, explanation: 'Giữ nguyên bộ NST.' },
          { type: QuestionType.TRUE_FALSE, question: 'Nguyên phân xảy ra ở tế bào sinh dưỡng.', isTrue: true, explanation: 'Giúp cơ thể lớn lên.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Ở kỳ nào NST xếp thành 1 hàng?', correctAnswer: 'kỳ giữa', explanation: 'Trên mặt phẳng xích đạo.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'NST nhân đôi ở giai đoạn nào?', options: ['Kỳ đầu', 'Kỳ trung gian', 'Kỳ sau', 'Kỳ cuối'], correctIndex: 1, explanation: 'Pha S của kỳ trung gian.' },
          { type: QuestionType.TRUE_FALSE, question: 'Kỳ sau NST kép tách thành 2 NST đơn.', isTrue: true, explanation: 'Nhờ thoi phân bào kéo.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Số lượng tế bào tăng lên bao nhiêu sau 1 lần nguyên phân?', correctAnswer: '2', explanation: 'Nhân đôi số lượng.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Thoi phân bào biến mất ở kỳ nào?', options: ['Đầu', 'Giữa', 'Sau', 'Cuối'], correctIndex: 3, explanation: 'Kết thúc phân chia nhân.' },
          { type: QuestionType.TRUE_FALSE, question: 'Màng nhân xuất hiện lại ở kỳ cuối.', isTrue: true, explanation: 'Tạo 2 nhân mới.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Nguyên phân giúp sinh vật:', options: ['Lớn lên', 'Thay thế tế bào già', 'Sinh sản vô tính', 'Tất cả ý trên'], correctIndex: 3, explanation: 'Ý nghĩa sinh học.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Tế bào thực vật chia tế bào chất bằng cách nào?', correctAnswer: 'vách ngăn', explanation: 'Khác với thắt màng ở động vật.' }
        ]
      },
      {
        id: '36-2',
        title: 'II. Giảm phân',
        description: 'Tạo ra giao tử n.',
        game: {
          type: GameType.MATCHING,
          data: [
            { id: '1', left: 'Tiếp hợp', right: 'Trao đổi chéo ở kỳ đầu I' },
            { id: '2', left: 'Giảm phân I', right: 'NST giảm đi một nửa' },
            { id: '3', left: 'Giảm phân II', right: 'Tương tự nguyên phân' },
            { id: '4', left: 'Giao tử', right: 'Tế bào n (trứng/tinh trùng)' }
          ]
        },
        assessment: [
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Giảm phân gồm mấy lần phân bào?', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'GP I và GP II.' },
          { type: QuestionType.TRUE_FALSE, question: 'Giảm phân tạo ra biến dị tổ hợp.', isTrue: true, explanation: 'Do phân li độc lập và trao đổi chéo.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Sản phẩm từ 1 tế bào mẹ 2n qua giảm phân?', correctAnswer: '4 tế bào n', explanation: 'Giảm số lượng NST.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Ở kỳ giữa I, NST xếp thành mấy hàng?', options: ['1', '2', '3', '4'], correctIndex: 1, explanation: 'Xếp thành 2 hàng song song.' },
          { type: QuestionType.TRUE_FALSE, question: 'NST nhân đôi 2 lần trong giảm phân.', isTrue: false, explanation: 'Chỉ nhân đôi 1 lần ở kỳ trung gian I.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Trao đổi chéo xảy ra ở kỳ nào?', correctAnswer: 'kỳ đầu i', explanation: 'Tạo ra tái tổ hợp gene.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Giảm phân xảy ra ở đâu?', options: ['Tế bào da', 'Tế bào rễ', 'Cơ quan sinh dục', 'Gan'], correctIndex: 2, explanation: 'Ở tế bào sinh dục chín.' },
          { type: QuestionType.TRUE_FALSE, question: 'Số NST ở kỳ cuối I là n kép.', isTrue: true, explanation: 'Đã giảm số lượng nhưng còn kép.' },
          { type: QuestionType.MULTIPLE_CHOICE, question: 'Kỳ sau II tách cái gì?', options: ['NST kép tương đồng', 'Chromatid', 'Màng nhân', 'Trung thể'], correctIndex: 1, explanation: 'Giống kỳ sau nguyên phân.' },
          { type: QuestionType.SHORT_ANSWER, question: 'Quá trình này phục vụ hình thức sinh sản nào?', correctAnswer: 'hữu tính', explanation: 'Tạo giao tử.' }
        ]
      }
    ]
  }
];
