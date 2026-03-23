import { motion } from 'motion/react';
import { CheckCircle2, ChevronRight, BookOpen, Star, Gift, MessageCircle } from 'lucide-react';

export default function App() {
  return (
    <div className="min-h-screen bg-bg-base font-sans text-text-main selection:bg-primary/20">
      {/* Hero Section */}
      <section className="relative pt-20 pb-16 md:pt-32 md:pb-24 px-4 overflow-hidden">
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <p className="text-primary font-bold tracking-widest mb-4 text-sm md:text-base">
            エステ業界20年・のべ3万人を施術したプロが書いた
          </p>
          <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-gray-900 leading-tight mb-8">
            <span className="marker-yellow">"サロン選びの本当の判断基準"</span>を、<br className="hidden md:block" />
            無料で公開します
          </h1>
          
          {/* 画像 */}
          <div className="relative max-w-3xl mx-auto mt-12 rounded-[2rem] overflow-hidden shadow-2xl border-4 border-white">
            <img 
              src="https://asue-beauty.com/wp-content/uploads/2022/10/830-500_1-730x500.jpg" 
              alt="エステのイメージ" 
              className="w-full h-auto object-cover aspect-video" 
              referrerPolicy="no-referrer" 
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/10 to-transparent flex items-end justify-center pb-8 md:pb-12">
              <p className="text-white font-serif text-lg md:text-2xl font-bold tracking-wide drop-shadow-md">
                あなたの美しさを引き出す、正しい選択を。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Problems Section */}
      <section className="py-16 px-4 bg-white">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-10">
            <p className="text-lg md:text-xl font-bold text-gray-800 mb-6 leading-relaxed">
              口コミの★評価を信じて失敗した方、<br />
              調べるほど怖くなって動けなくなっている方へ。
            </p>
            <h2 className="text-2xl md:text-3xl font-serif font-bold text-primary">
              エステサロン選びで、<br className="md:hidden" />こんな経験はありませんか。
            </h2>
          </div>

          <div className="bg-bg-base border-2 border-primary/30 rounded-[2rem] p-6 md:p-10 shadow-sm relative">
            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-white px-6 py-2 rounded-full border-2 border-primary/30 text-primary font-bold shadow-sm">
              よくある失敗パターン
            </div>
            <ul className="space-y-6 mt-4">
              {[
                "体質も肌質も聞かれないまま、全員に同じコースを勧められた",
                "施術の効果や必要回数をちゃんと説明されなかった",
                "★4.5の口コミを信じたのに、期待と全然違った",
                "「もう少し調べてからにしよう」と思って、半年過ぎていた"
              ].map((text, i) => (
                <li key={i} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-primary shrink-0 mt-1" />
                  <span className="text-lg text-gray-800 font-medium">{text}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-12 text-center space-y-6">
            <p className="text-lg md:text-xl font-bold text-gray-900">もし一つでも当てはまったなら、知ってほしいことがあります。</p>
            <p className="text-gray-700 leading-relaxed text-lg">
              それは、あなたの<span className="text-primary font-bold">"目利き"が甘かったわけじゃない</span>ということ。<br />
              「良いサロンと悪いサロンを見分ける判断基準」が、世の中にほとんど出回っていなかっただけなんです。
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 bg-primary text-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center mb-16">
            このガイドブックを書いた理由
          </h2>
          
          <div className="flex flex-col md:flex-row gap-10 items-center">
            <div className="w-full md:w-1/3 shrink-0">
              <img 
                src="https://storage.googleapis.com/aistudio-user-uploads-prod/1742718299298/image.png" 
                alt="著者プロフィール" 
                className="w-48 h-48 md:w-full md:h-auto aspect-square object-cover rounded-full md:rounded-[2rem] shadow-xl mx-auto border-4 border-white/20"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="w-full md:w-2/3 space-y-6 text-white/90 leading-relaxed font-medium">
              <p>
                はじめまして。恵比寿でASUE Beauty Salonを経営しているオーナーエステティシャンです。エステティシャン歴20年、のべ3万人以上のお客様を施術してきました。
              </p>
              <p>
                ASUEのコンセプトは「いつまでも美しくありたい——その願い、一緒に叶えます」。女性ならどなたでも共通のこの願いを叶えるお手伝いをすることが、20年間変わらない私の仕事の原点です。
              </p>
              <p>
                だからこそ、エステサロン選びで失敗して<span className="font-bold text-accent">「もうエステなんて信じない」</span>と思ってしまう女性が増えるのが、同じ業界にいる人間として本当に悔しいんです。
              </p>
              <p>
                「正しい見極め方を知っていれば、もっと早く良いサロンに出会えたのに」——お客様のこの言葉を何度も聞いてきたから、業界の内側を知るプロの視点で<span className="font-bold text-accent">「本当の判断基準」</span>を1冊にまとめました。
              </p>
              <p className="text-sm opacity-80 pt-6 border-t border-white/20 mt-6">
                そしてもう一つ、正直にお伝えします。このガイドブックを読んで「ちゃんとした判断基準で選びたい」と思ってくださった方の中から、うちのサロンに興味を持ってくださる方がいたら嬉しいな、とも思っています。ただ、中身は特定のサロンを宣伝するものではありません。どのサロンを選ぶにしても使える「良いサロンを見極める3つの視点」を、20年の経験からまとめたものです。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contents Section */}
      <section className="py-20 px-4 bg-bg-base">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-primary mb-4">
              本書の中身を一部ご紹介
            </h2>
            <p className="text-gray-600">プロの視点でまとめた、サロン選びの「正解」がここにあります。</p>
          </div>

          <div className="space-y-6">
            {[
              {
                title: "エステ選びの「5大しくじりパターン」",
                subtitle: "あなたはどれに当てはまりますか？",
                desc: "カウンセリング不足、説明不足、広告先行、相性ミスマッチ、期待値ズレ。エステサロン選びの失敗は、大きく5つのパターンに分かれます。そして、どのパターンにも共通するのは「良いサロンを見極める判断基準を持っていなかった」ということ。"
              },
              {
                title: "エステ業界が消費者に言わない3つの不都合な真実",
                desc: "国家資格がないから技術力に大きな差がある。口コミの★評価だけでは判断できない。施術カテゴリごとに結果が出るまでの回数が全然違う。この3つの構造を知ると、良いサロンとそうでないサロンの違いがクリアに見えてきます。"
              },
              {
                title: "良いサロンを見極める3つの視点",
                subtitle: "「カウンセリング」「結果コミット」「相性」",
                desc: "そのサロンは「あなたのカラダ」を見ているか。「結果」にコミットしているか。「長く付き合える」相性か。20年で3万人を見てきたプロが、良いサロンかどうかを判断するとき、実際に見ている3つの視点を具体的にお伝えします。"
              },
              {
                title: "施術カテゴリ別トータルコストの真実",
                subtitle: "「1回15,000円」に見えて、総額15万円",
                desc: "フェイシャル、痩身、脱毛、リラクゼーション。それぞれの料金と「効果が出るまでの回数」を掛け合わせたトータルコストの全体像をお見せします。カウンセリングで「トータルでいくらかかりますか？」と聞くべき理由がわかります。"
              },
              {
                title: "状況別サロンの選び方マップ",
                subtitle: "「私の場合はどうすればいい？」",
                desc: "失敗経験がある人。30代後半〜40代で再開したい人。不規則勤務の人。収入が変動する人。それぞれの状況に合った「3つの視点の使い方」をまとめました。"
              },
              {
                title: "怖いまま動いた人だけが辿り着いた「選んでよかった」",
                subtitle: "実際の声",
                desc: "「初めてで不安だったけど、丁寧に説明してくれて安心した」「このサロンとは長く付き合いたい」。判断基準を持って体験に行った人の声を集めました。"
              }
            ].map((item, i) => (
              <div key={i} className="bg-white p-6 md:p-8 rounded-[2rem] shadow-sm border border-primary/10 hover:shadow-md transition-shadow">
                <div className="flex gap-4">
                  <div className="shrink-0 mt-1">
                    <BookOpen className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                    {item.subtitle && <p className="text-primary font-medium mb-3">{item.subtitle}</p>}
                    <p className="text-gray-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-serif font-bold text-center text-primary mb-16">
            実際にいただいている声
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {[
              "初めてのエステでわからないことが多かったのですが、丁寧に説明してくださって安心できました。",
              "スタッフの方が親身になってここまでやってくれるサロンは今までなかった。かなりの信頼度です。",
              "数回でセルライトが減少してびっくり。体重はそんなに変わらないのに、みんなに痩せたと言われます。"
            ].map((text, i) => (
              <div key={i} className="bg-bg-base p-8 rounded-[2rem] relative border border-primary/10 shadow-sm">
                <Star className="w-8 h-8 text-primary mb-4 fill-primary/20" />
                <p className="text-gray-800 font-medium leading-relaxed">「{text}」</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-bg-base to-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
            <Gift className="w-8 h-8" />
          </div>
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-gray-900 mb-8">
            無料でダウンロードできます
          </h2>
          <div className="text-lg text-gray-700 mb-10 space-y-4">
            <p>
              LINEに登録するだけで、すぐにお読みいただけます。
            </p>
            <p>
              エステサロン選びで一番大事なのは、「最高のサロンを見つけること」じゃなくて、<br className="hidden md:block" />
              <span className="font-bold text-primary text-xl">「良いサロンを見極める判断基準を持つこと」</span>。
            </p>
            <p>
              3つの視点も、トータルコストの全体像も、状況別の選び方マップも——<br className="hidden md:block" />
              この1冊に全部入っています。
            </p>
          </div>

          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            href="#"
            className="inline-flex items-center justify-center w-full md:w-auto px-10 py-5 bg-[#06C755] hover:bg-[#05b34c] text-white text-xl font-bold rounded-full shadow-lg shadow-[#06C755]/30 transition-colors"
          >
            <MessageCircle className="w-6 h-6 mr-2" />
            無料ガイドブックを受け取る
            <ChevronRight className="w-6 h-6 ml-2" />
          </motion.a>
        </div>
      </section>

      {/* PS Section */}
      <section className="py-16 px-4 bg-gray-50 border-t border-gray-200">
        <div className="max-w-3xl mx-auto">
          <h3 className="text-2xl font-serif font-bold text-gray-900 mb-6">PS.</h3>
          <div className="space-y-4 text-gray-700 leading-relaxed">
            <p>
              20年間で3万人以上のお客様と向き合ってきた中で、「正しい見極め方を知っていれば、もっと早く良いサロンに出会えたのに」という声をたくさん聞いてきました。
            </p>
            <p>
              良いサロンとの出会いは、あなたの人生を豊かにしてくれます。毎月のご褒美にプロのケアを受けて、なりたい自分に近づいていく実感がある。そんな体験を、一人でも多くの方に届けたい。
            </p>
            <p>
              その第一歩として、この本を書きました。
            </p>
          </div>
          <div className="mt-10 text-center">
            <a href="#" className="inline-flex items-center text-primary font-bold hover:underline">
              無料ガイドブックを受け取る <ChevronRight className="w-5 h-5 ml-1" />
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 text-center text-gray-500 text-sm bg-gray-900">
        <p>&copy; {new Date().getFullYear()} ASUE Beauty Salon. All rights reserved.</p>
      </footer>
    </div>
  );
}
